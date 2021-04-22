import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TodoModal } from "./TodoModal";
import { COLORS } from "../../assets/tokens";

export function TodoScreen(props) {
  const [todos, setTodos] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPushed, setIsPushed] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const listRef = useRef();

  const userId = props.route.params.user.id;

  const storeData = async (todos) => {
    try {
      const key = userId;
      const object = {};
      object[key] = todos;
      const respAllTodos = await AsyncStorage.getItem("AllTodos");
      const allTodos = JSON.parse(respAllTodos);
      if (allTodos === null) {
        const createAllTodos = JSON.stringify(object);
        await AsyncStorage.setItem("AllTodos", createAllTodos);
      } else {
        const newAllTodos = JSON.stringify(Object.assign(allTodos, object));
        await AsyncStorage.setItem("AllTodos", newAllTodos);
      }
    } catch (e) {
      console.log(e);
    }
    setTodos(todos);
    setIsPending(false);
  };

  const getLocalTodo = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("AllTodos");
      const allTodos = jsonValue != null ? JSON.parse(jsonValue) : null;
      if (allTodos !== null && allTodos[userId]) {
        return allTodos[userId];
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getApiTodos = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => {
        storeData(json);
      });
  };

  const todosValidation = async (item) => {
    const respAllTodos = await AsyncStorage.getItem("AllTodos");
    const allTodos = JSON.parse(respAllTodos);

    allTodos[userId].map((todo) => {
      if (todo.id === item.id) {
        todo.completed ? (todo.completed = false) : (todo.completed = true);
      }
    });
    const jsonValue = JSON.stringify(allTodos);
    try {
      await AsyncStorage.setItem("AllTodos", jsonValue);
      setIsPushed(true);
    } catch (e) {
      setIsPushed(true);
    }
  };

  const createTodo = async (title) => {
    const newTodo = [
      {
        completed: false,
        id:
          Math.max.apply(
            Math,
            todos.map((item) => {
              return item.id;
            })
          ) + 1,
        title: title,
        userId: userId,
      },
    ];

    const respAllTodos = await AsyncStorage.getItem("AllTodos");
    const allTodos = JSON.parse(respAllTodos);

    const newTodos = newTodo.concat(allTodos[userId]);
    allTodos[userId] = newTodos;

    try {
      await AsyncStorage.setItem("AllTodos", JSON.stringify(allTodos));
      listRef.current.scrollToOffset({ animated: true });
      setIsPushed(true);
    } catch (e) {
      console.log(e);
      setIsPushed(true);
    }
  };

  const syncTodos = () => {
    getLocalTodo().then((response) => {
      if (response === null) {
        getApiTodos();
      } else {
        setTodos(response);
        setIsPending(false);
        setIsPushed(false);
      }
    });
  };

  useEffect(() => {
    syncTodos();
  }, []);

  useEffect(() => {
    if (isPushed) {
      syncTodos();
    }
  }, [isPushed]);
  if (isPending) {
    return (
      <ActivityIndicator
        style={{ marginTop: 100 }}
        size="large"
        color={COLORS.primary}
      />
    );
  } else {
    return (
      <View style={{ backgroundColor: "white" }}>
        <FlatList
          ref={listRef}
          data={todos}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => {
                todosValidation(item);
              }}
            >
              <Ionicons
                name={
                  item.completed
                    ? "ios-checkmark-circle"
                    : "ios-ellipse-outline"
                }
                size={45}
                color={item.completed ? COLORS.validateGreen : COLORS.lightGrey}
                style={{ marginRight: 5 }}
              />
              <Text
                style={
                  item.completed
                    ? {
                        textDecorationLine: "line-through",
                        color: COLORS.lightGrey,
                      }
                    : { color: COLORS.black }
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={styles.addButton}
            icon={
              <Icon
                name="pluscircle"
                size={40}
                color="white"
                style={styles.addIcon}
              />
            }
            onPress={() => setIsVisible(true)}
          />
        </View>
        <TodoModal
          modalVisible={isVisible}
          closeModal={() => setIsVisible(false)}
          // onValidate={createTodo}
          onValidate={createTodo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addIcon: {
    color: COLORS.primary,
  },
  addButton: {
    backgroundColor: COLORS.white,
    borderRadius: 50,
    margin: 0,
    padding: 0,
    borderWidth: 0,
  },
  buttonContainer: {
    position: "absolute",

    right: 15,
    bottom: 15,
  },
  task: {
    margin: 0,
    padding: 20,
  },
  checkbox: {
    flexDirection: "row",
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1,
    padding: 20,
    alignItems: "center",
  },
});

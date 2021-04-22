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
import { useScrollToTop } from "@react-navigation/native";

export function TodoScreen(props) {
  const [todos, setTodos] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPushed, setIsPushed] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const listRef = useRef();

  const userId = props.route.params.user.id;

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("todos", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getLocalTodo = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("todos");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
  };

  const getApiTodos = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
    storeData(todos);
  };

  const syncTodos = () => {
    getLocalTodo().then((response) => {
      if (response !== null) {
        setTodos(response);
        setIsPushed(false);
        setIsPending(false);
      } else {
        getApiTodos();
        setIsPushed(false);
        setIsPending(false);
      }
    });
  };

  useEffect(() => {
    if (isPushed) {
      syncTodos();
    }
  }, [isPushed]);

  useEffect(() => {
    syncTodos();
  }, []);

  const todosValidation = async (item) => {
    todos.map((todo) => {
      if (todo === item) {
        todo.completed ? (todo.completed = false) : (todo.completed = true);
      }
    });
    const jsonValue = JSON.stringify(todos);
    try {
      await AsyncStorage.setItem("todos", jsonValue);

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
    const newTodos = newTodo.concat(todos);
    const jsonValue = JSON.stringify(newTodos);
    try {
      await AsyncStorage.setItem("todos", jsonValue);
      listRef.current.scrollToOffset({ animated: true });
      setIsPushed(true);
    } catch (e) {
      console.log(e);
      setIsPushed(true);
    }
  };

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
                color={item.completed ? "#95DC2E" : "#dddddd"}
                style={{ marginRight: 5 }}
              />
              <Text
                style={
                  item.completed
                    ? { textDecorationLine: "line-through", color: "#c7c7c7" }
                    : { color: "#181818" }
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
          onValidate={createTodo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addIcon: {
    color: "#FF7A00",
  },
  addButton: {
    backgroundColor: "#FFFFFF",
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
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    padding: 20,
    alignItems: "center",
  },
});

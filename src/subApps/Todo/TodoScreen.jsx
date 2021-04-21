import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

export function TodoScreen(props) {
  const [todos, setTodos] = useState([]);

  const userId = props.route.params.user.id;


  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('todos', jsonValue)
    } catch (e) {
      console.log(error);
    }
  }

  const postTodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
      storeData(todos);
  };

  useEffect(() => {
    postTodo();
  }, [todos]);

  
  const getTodo = async () => {
    try {
      const value = await AsyncStorage.getItem('todos')
      if(value !== null) {
        const todoParse = JSON.parse(value);
        setTodos(todoParse)
        console.log("value after parse: ", todos)
      }
    } catch(e) {
      console.log("hello")
    }
  }
  

  console.log(getTodo())
  
  const todosValidation = () =>{
    // get les tâches dans le local storage
    // mettre les tâches du localstorage dans la props data de la flatlist
    //si une tâche de la flat list est false ou true set clé "completed" à true ou false
  }


  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.checkbox}
              onPress={todosValidation}
            >
              <Ionicons
                name={
                  item.completed
                    ? "ios-checkmark-circle"
                    : "ios-ellipse-outline"
                }
                size={35}
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
      </ScrollView>
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
          onPress={() =>
            console.log(
              "PA ici tu fais un fonction qui t'ouvre la modal d'ajout d'une nouvelle tache"
            )
          }
        />
      </View>
    </View>
  );
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
    padding: 10,
    alignItems: "center",
  },
});

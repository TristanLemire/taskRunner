import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

export function TodoScreen(props) {
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(false);

  const userId = props.route.params.user.id;

  const postTodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
  };

  const validationTodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({
        userId: todos.userId,
        id: todos.id,
        title: todos.title,
        completed: setChecked(false)
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));

  }

  useEffect(() => {
    validationTodo();
    postTodo();
  }, []);

  console.log("todos: ", todos);
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => {
                // console.log(
                //   "tache fini: PA ici tu ferra un call api pour dire que cette tache est valide ou invalide si elle est deja validé",
                //   postTodo()
                // );
                validationTodo()
              }}
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

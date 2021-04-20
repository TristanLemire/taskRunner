import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import TodoList from './TodoList/TodoList';

export function TodoScreen(props) {
  const [todos, setTodos] = useState([])

  const userId = props.route.params.user.id;

  const postTodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((json) => setTodos(json));
      console.log("todos: ", todos)

  }
  return (
    <View style={styles.todoView}>
      <ScrollView>
        {
          todos.map((item) =>{
            {console.log("todos title: ", item.title)}
            return (<TodoList 
            todoTitle={item.title}
          />)
          })
        }
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
          onPress={postTodo}
        />
    </View>
      </View>
  );
}

const styles = StyleSheet.create({
  todoView: {
    flex: 1,
    alignItems: "flex-end",
    backgroundColor: "#FFFFFF",
  },
  addIcon : {
    color: "#FF7A00"
  },

  addButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
  }, 
  buttonContainer:{
    position: "relative",
    right: "10px",
    bottom: "5px",
  }
});

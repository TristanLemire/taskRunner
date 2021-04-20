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
     
      <Button
        buttonStyle={styles.addButton}
        icon={
          <Icon
            name="pluscircle"
            size={30}
            color="white"
            style={styles.addIcon}
          />
        }
        onPress={postTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoView: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "flex-end",
    backgroundColor: "transparent",
  },
  scrollView: {
    height: '5em',
    alignItems: 'flex-end'
  },
  addIcon : {
    color: '#FF7A00'
  },

  addButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  }
});

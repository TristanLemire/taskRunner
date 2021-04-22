import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { CheckBox } from "react-native-elements";

export function TodoList(props) {
  const [checked, setChecked] = useState(false);

  return (
    <CheckBox
      title={props.todoTitle}
      checkedIcon="dot-circle-o"
      uncheckedIcon="circle-o"
      checked={checked}
      containerStyle={styles.task}
    />
  );
}

const styles = StyleSheet.create({
  task: {
    // backgroundColor: "#FFFFFF",
    // borderBottomColor: "#DDDDDD",
    // borderBottomWidth: 1,
    // borderTopColor: "#DDDDDD",
    // borderTopWidth: 1,
    // marginLeft: 0,
    // padding: 1.125,
    width: Dimensions.get("window").width,
    margin: 0,
  },
});

export default TodoList;

import React from "react";
import { Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

export function MiniPost(props) {
  const style = MiniPostStyle();

  return (
    <ListItem bottomDivider pad={16}>
      <ListItem.Content>
        <ListItem.Title>
          <Text style={style.userName}>Lorem dolor ipsum</Text>
        </ListItem.Title>

        <ListItem.Subtitle style={style.subtitle}>
          <Text style={style.userEmail}>
            ullam et saepe reiciendis voluptatem adipisci\nsit amet autem
            assumenda provident rerum...
          </Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const MiniPostStyle = () =>
  StyleSheet.create({
    userName: {
      color: "#20232a",
      fontSize: 15,
      fontWeight: "bold",
    },
    subtitle: {
      paddingTop: 8,
    },
    userEmail: {
      fontSize: 12,
    },
  });

import React from "react";
import { Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

export function MiniComment(props) {
  const style = MiniCommentStyle();

  const {
    comment: { body, name, email },
  } = props;

  return (
    <ListItem bottomDivider pad={16} style={style.listItem}>
      <ListItem.Content style={style.container}>
        <ListItem.Title>
          <Text style={style.title}>{name}</Text>
        </ListItem.Title>

        <Text style={style.email}>{email}</Text>

        <ListItem.Subtitle style={style.subtitle}>
          <Text style={style.body}>{body}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const MiniCommentStyle = () =>
  StyleSheet.create({
    listItem: {
      margin: 24,
    },
    container: {
      marginVertical: 8,
      marginHorizontal: 8,
    },
    title: {
      color: "#20232a",
      fontSize: 15,
      fontWeight: "bold",
    },
    email: {
      fontStyle: "italic",
      color: "#808080",
      marginVertical: 4,
    },
    subtitle: {
      paddingTop: 8,
    },
    body: {
      fontSize: 12,
    },
  });

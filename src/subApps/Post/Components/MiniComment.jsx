import React from "react";
import { Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";

export function MiniComment(props) {
  const style = MiniCommentStyle();

  const {
    comment: { body, name, email },
  } = props;
  console.log("body", body);

  return (
    <ListItem bottomDivider pad={16}>
      <ListItem.Content style={style.container}>
        <ListItem.Title>
          <Text style={style.title}>{name}</Text>
        </ListItem.Title>
        <Text>{email}</Text>
        <ListItem.Subtitle style={style.subtitle}>
          <Text style={style.body}>{body}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const MiniCommentStyle = () =>
  StyleSheet.create({
    container: {
      marginVertical: 16,
      marginHorizontal: 8,
    },
    title: {
      color: "#20232a",
      fontSize: 15,
      fontWeight: "bold",
    },
    subtitle: {
      paddingTop: 8,
    },
    body: {
      fontSize: 12,
    },
  });

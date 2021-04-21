import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { COLORS } from "../../../assets/colors";

export function MiniComment(props) {
  const style = MiniCommentStyle();

  const {
    comment: { body, name, email },
  } = props;

  return (
    <View style={style.listItem}>
      <Text style={style.title}>{name}</Text>
      <Text style={style.email}>{email}</Text>
      <Text style={style.body}>{body}</Text>
    </View>
  );
}

const MiniCommentStyle = () =>
  StyleSheet.create({
    listItem: {
      margin: 12,
      marginBottom: 4,
      backgroundColor: "white",
      borderRadius: 10,
      padding: 12,
    },
    title: {
      color: COLORS.black,
      fontSize: 15,
      fontWeight: "bold",
    },
    email: {
      fontStyle: "italic",
      color: COLORS.grey,
      fontSize: 10,
    },
    body: {
      fontSize: 12,
      paddingTop: 8,
      lineHeight: 18,
    },
  });

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { COLORS, FONTSIZES, SPACES } from "../../../assets/tokens";

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
      margin: SPACES.xdefault,
      marginBottom: SPACES.small,
      backgroundColor: "white",
      borderRadius: 10,
      padding: SPACES.xdefault,
    },
    title: {
      color: COLORS.black,
      fontSize: FONTSIZES.default,
      fontWeight: "bold",
    },
    email: {
      fontStyle: "italic",
      color: COLORS.grey,
      fontSize: FONTSIZES.small,
    },
    body: {
      fontSize: FONTSIZES.small,
      paddingTop: SPACES.default,
      lineHeight: SPACES.xdefault,
    },
  });

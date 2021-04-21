import React from "react";
import { Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { COLORS, FONTSIZES, SPACES } from "../../../assets/tokens";

export function MiniPost(props) {
  const style = MiniPostStyle();

  const {
    post: { body, title },
  } = props;

  return (
    <ListItem bottomDivider pad={16}>
      <ListItem.Content style={style.container}>
        <ListItem.Title>
          <Text style={style.title}>{title}</Text>
        </ListItem.Title>

        <ListItem.Subtitle style={style.subtitle}>
          <Text style={style.body}>{body}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const MiniPostStyle = () =>
  StyleSheet.create({
    container: {
      marginVertical: SPACES.xdefault,
      marginHorizontal: SPACES.default,
    },
    title: {
      color: COLORS.black,
      fontSize: FONTSIZES.default,
      fontWeight: "bold",
    },
    subtitle: {
      paddingTop: SPACES.default,
    },
    body: {
      fontSize: FONTSIZES.small,
    },
  });

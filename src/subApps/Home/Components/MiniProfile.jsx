import React from "react";
import { Text, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export function MiniProfile(props) {
  const style = MiniProfileStyle();
  const {
    item: { image, name, email },
  } = props;

  return (
    <ListItem bottomDivider pad={16}>
      <Avatar
        rounded
        containerStyle={{ backgroundColor: "#BDBDBD" }}
        size="medium"
        source={{ uri: image }}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text style={style.userName}>{name}</Text>
        </ListItem.Title>
        <ListItem.Subtitle style={style.subtitle}>
          <Text style={style.userEmail}>{email}</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

const MiniProfileStyle = () =>
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

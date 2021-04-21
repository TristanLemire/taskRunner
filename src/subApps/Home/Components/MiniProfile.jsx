import React from "react";
import { Text, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { COLORS } from "../../../assets/colors";

export function MiniProfile(props) {
  const style = MiniProfileStyle();
  const {
    item: { image, name, email },
  } = props;

  return (
    <ListItem bottomDivider pad={16}>
      <Avatar
        rounded
        containerStyle={{ backgroundColor: `${COLORS.grey}` }}
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
      color: COLORS.black,
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

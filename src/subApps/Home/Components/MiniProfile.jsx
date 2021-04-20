import React from "react";
import { Text, StyleSheet } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export function MiniProfile(props) {
  const MiniProfileContextual = MiniProfileStyle();
  const { item } = props;

  return (
    <ListItem bottomDivider pad={16}>
      {/* {console.log(item)} */}
      <Avatar
        rounded
        containerStyle={{ backgroundColor: "#BDBDBD" }}
        size="medium"
        source={{ uri: item.image }}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text style={MiniProfileContextual.userName}>{item.name}</Text>
        </ListItem.Title>
        <ListItem.Subtitle style={MiniProfileContextual.subtitle}>
          <Text style={MiniProfileContextual.userEmail}>{item.email}</Text>
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

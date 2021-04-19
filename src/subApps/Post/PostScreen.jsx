import * as React from "react";
import { Text, View } from "react-native";

export function PostScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Post!</Text>
      <Text>{props.route.params.user.name}</Text>
    </View>
  );
}

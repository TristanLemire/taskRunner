import * as React from "react";
import { Text, View } from "react-native";

export function TodoScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Album!</Text>
      <Text>{props.route.params.user.name}</Text>
    </View>
  );
}

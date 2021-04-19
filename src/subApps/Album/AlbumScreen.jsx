import * as React from "react";
import { Text, View } from "react-native";

export function AlbumScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>TODO!</Text>
      <Text>{props.route.params.user.name}</Text>
    </View>
  );
}

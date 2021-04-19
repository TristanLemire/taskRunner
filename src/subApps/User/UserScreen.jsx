import * as React from "react";
import { Text, View, Button } from "react-native";

export function UserScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{props.route.params.user.name}</Text>
      <Button
        onPress={() => props.route.params.onChange(false)}
        title="Select user"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

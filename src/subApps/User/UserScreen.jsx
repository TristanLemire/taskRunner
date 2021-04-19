import * as React from "react";
import { Text, View, Button } from "react-native";

export function UserScreen(props) {
  console.log(props.route.params.onChange);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User!</Text>
      <Button
        onPress={() => props.route.params.onChange(false)}
        title="Select user"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

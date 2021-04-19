import * as React from "react";
import { Text, View, Button } from "react-native";

export function HomeScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        onPress={() => props.setUser(true)}
        title="Select user"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

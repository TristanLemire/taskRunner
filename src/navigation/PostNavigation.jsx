import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostScreen } from "../subApps/Post/PostScreen";

const Stack = createStackNavigator();

export function PostNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Post" component={PostScreen} />
    </Stack.Navigator>
  );
}

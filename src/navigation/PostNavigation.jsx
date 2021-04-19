import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostScreen } from "../subApps/Post/PostScreen";

const Stack = createStackNavigator();

export function PostNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Post"
        component={PostScreen}
        initialParams={{
          user: props.route.params.user,
        }}
      />
    </Stack.Navigator>
  );
}

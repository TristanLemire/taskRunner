import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostScreen } from "../subApps/Post/PostScreen";
import { PostDetailScreen } from "../subApps/Post/PostDetailScreen";

const Stack = createStackNavigator();

export function PostNavigation(props) {
  const {
    route: {
      params: { user },
    },
  } = props;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Post"
        component={PostScreen}
        initialParams={{
          user: user,
        }}
        options={{
          headerTitle: "Posts",
          headerStyle: {
            backgroundColor: "#ff7A00",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{
          headerTitle: "Detail",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#ff7A00",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
    </Stack.Navigator>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostScreen } from "../subApps/Post/PostScreen";
import { PostDetailScreen } from "../subApps/Post/PostDetailScreen";
import { COLORS } from "../assets/tokens";

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
            backgroundColor: COLORS.primary,
          },
          headerTitleStyle: {
            fontFamily: "Montserrat, sans-serif",
            color: COLORS.white,
          },
        }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{
          headerTitle: "Detail",
          headerTintColor: COLORS.white,
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTitleStyle: {
            fontFamily: "Montserrat, sans-serif",
            color: COLORS.white,
          },
        }}
      />
    </Stack.Navigator>
  );
}

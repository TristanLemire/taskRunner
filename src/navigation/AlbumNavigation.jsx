import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AlbumScreen } from "../subApps/Album/AlbumScreen";
import { PhotoScreen } from "../subApps/Album/PhotoScreen";
import { COLORS } from "../assets/colors";

const Stack = createStackNavigator();

export function AlbumNavigation(props) {
  const {
    route: {
      params: { user },
    },
  } = props;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Album"
        component={AlbumScreen}
        initialParams={{
          user: user,
        }}
        options={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTitleStyle: {
            color: COLORS.white,
          },
        }}
      />
      <Stack.Screen
        name="Photo"
        component={PhotoScreen}
        options={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: COLORS.brandOrange,
          },
          headerTitleStyle: {
            color: COLORS.white,
          },
        }}
      />
    </Stack.Navigator>
  );
}

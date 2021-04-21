import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AlbumScreen } from "../subApps/Album/AlbumScreen";
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

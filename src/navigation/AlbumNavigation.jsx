import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AlbumScreen } from "../subApps/Album/AlbumScreen";

const Stack = createStackNavigator();

export function AlbumNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Album"
        component={AlbumScreen}
        initialParams={{
          user: props.route.params.user,
        }}
      />
    </Stack.Navigator>
  );
}

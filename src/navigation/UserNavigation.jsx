import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserScreen } from "../subApps/User/UserScreen";

const Stack = createStackNavigator();

export function UserNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserScreen}
        initialParams={{
          onChange: props.route.params.onChange,
          user: props.route.params.user,
        }}
      />
    </Stack.Navigator>
  );
}

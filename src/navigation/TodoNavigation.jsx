import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TodoScreen } from "../subApps/Todo/TodoScreen";

const Stack = createStackNavigator();

export function TodoNavigation(props) {
  const {
    route: {
      params: { user },
    },
  } = props;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Todo list"
        component={TodoScreen}
        initialParams={{
          user: user,
        }}
        options={{
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

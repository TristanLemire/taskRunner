import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {TodoScreen} from '../subApps/Todo/TodoScreen'

const Stack = createStackNavigator();

export function TodoNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Todo list" component={TodoScreen} />
    </Stack.Navigator>
  );
}
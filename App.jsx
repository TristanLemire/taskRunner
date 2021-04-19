import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TodoNavigation} from './src/navigation/TodoNavigation'
import {AlbumNavigation} from './src/navigation/AlbumNavigation'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todo" component={TodoNavigation} />
        <Tab.Screen name="Album" component={AlbumNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
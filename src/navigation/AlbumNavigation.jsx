import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {AlbumScreen} from '../subApps/Album/AlbumScreen'

const Stack = createStackNavigator();

export function AlbumNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Album" component={AlbumScreen} />
    </Stack.Navigator>
  );
}
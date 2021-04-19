import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoNavigation } from "./src/navigation/TodoNavigation";
import { AlbumNavigation } from "./src/navigation/AlbumNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Todo") {
              iconName = "ios-list";
            } else if (route.name === "Album") {
              iconName = focused ? "ios-albums-sharp" : "ios-albums-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          style: {
            alignItems: "center",
            borderTopWidth: 0.5,
          },
          labelStyle: {
            fontSize: 12,
          },
        }}
      >
        <Tab.Screen name="Todo" component={TodoNavigation} />
        <Tab.Screen name="Album" component={AlbumNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

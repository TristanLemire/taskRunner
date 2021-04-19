import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoNavigation } from "./src/navigation/TodoNavigation";
import { AlbumNavigation } from "./src/navigation/AlbumNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PostNavigation } from "./src/navigation/PostNavigation";
import { HomeScreen } from "./src/subApps/Home/HomeScreen";
import { UserNavigation } from "./src/navigation/UserNavigation";

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState(false);
  const [test, settest] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const onChange = (value) => {
    setUser(value);
  };
  return (
    <>
      {user ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Todo") {
                  iconName = "ios-list";
                } else if (route.name === "Album") {
                  iconName = focused
                    ? "ios-albums-sharp"
                    : "ios-albums-outline";
                } else if (route.name === "Post") {
                  iconName = focused ? "ios-chatbox" : "ios-chatbox-outline";
                } else if (route.name === "User") {
                  iconName = focused ? "ios-person" : "ios-person-outline";
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
            <Tab.Screen
              name="User"
              component={UserNavigation}
              initialParams={{ onChange: onChange }}
            />
            <Tab.Screen name="Album" component={AlbumNavigation} />
            <Tab.Screen name="Post" component={PostNavigation} />
            <Tab.Screen name="Todo" component={TodoNavigation} />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <HomeScreen setUser={setUser} />
      )}
    </>
  );
}

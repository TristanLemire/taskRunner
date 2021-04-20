import React, { useState, useEffect, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoNavigation } from "./src/navigation/TodoNavigation";
import { AlbumNavigation } from "./src/navigation/AlbumNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PostNavigation } from "./src/navigation/PostNavigation";
import { HomeScreen } from "./src/subApps/Home/HomeScreen";
import { UserNavigation } from "./src/navigation/UserNavigation";

const Tab = createBottomTabNavigator();
export const { Provider, Consumer } = React.createContext({});

export default function App() {
  const [user, setUser] = useState(false);
  const [users, setUsers] = useState(null);

  const onChange = (value) => {
    setUser(value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <>
      {user ? (
        <Provider value={{ onChange: onChange }}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Todo") {
                    iconName = "ios-list";
                  } else if (route.name === "Album") {
                    iconName = focused ? "ios-images" : "images-outline";
                  } else if (route.name === "Post") {
                    iconName = focused ? "ios-chatbox" : "ios-chatbox-outline";
                  } else if (route.name === "User") {
                    iconName = focused ? "ios-person" : "ios-person-outline";
                  }
                  return <Ionicons name={iconName} size={22} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: "#ff7A00",
                inactiveTintColor: "#181818",
                tabStyle: { borderColor: "#ff7A00", borderTopWidth: 1.5 },
                style: {
                  alignItems: "center",
                },
                labelStyle: {
                  fontSize: 12,
                },
              }}
            >
              <Tab.Screen
                name="User"
                component={UserNavigation}
                initialParams={{ user: user }}
              />
              <Tab.Screen
                name="Album"
                component={AlbumNavigation}
                initialParams={{ user: user }}
              />
              <Tab.Screen
                name="Post"
                component={PostNavigation}
                initialParams={{ user: user }}
              />
              <Tab.Screen
                name="Todo"
                component={TodoNavigation}
                initialParams={{ user: user }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      ) : (
        <HomeScreen setUser={setUser} users={users} />
      )}
    </>
  );
}

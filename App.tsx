import React, { useState, useEffect, createContext } from "react";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TodoNavigation } from "./src/navigation/TodoNavigation";
import { AlbumNavigation } from "./src/navigation/AlbumNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PostNavigation } from "./src/navigation/PostNavigation";
import { HomeScreen } from "./src/subApps/Home/HomeScreen";
import { UserNavigation } from "./src/navigation/UserNavigation";
import { LogBox } from "react-native";

const Tab = createBottomTabNavigator();
export const { Provider, Consumer } = createContext({});

export type User = {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

type GetIconProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  focused: boolean;
  color: string;
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  LogBox.ignoreAllLogs();

  const onChange = (user: User) => {
    setUser(user);
  };

  const getIcon = (props: GetIconProps) => {
    let iconName = "ios-list";

    switch (props.route.name) {
      case "Todo":
        iconName = "ios-list";
        break;
      case "Album":
        iconName = props.focused ? "ios-images" : "images-outline";
        break;
      case "Post":
        iconName = props.focused ? "ios-chatbox" : "ios-chatbox-outline";
        break;
      case "User":
        iconName = props.focused ? "ios-person" : "ios-person-outline";
        break;
    }

    return <Ionicons name={iconName} size={22} color={props.color} />;
  };

  const fetchRetry = () => {
    setError(false);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch(() => setError(true));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch(() => setError(true));
  }, []);

  return (
    <>
      {user && !error ? (
        <Provider value={{ onChange: onChange }}>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                  return getIcon({ route, focused, color });
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
        <>
          <HomeScreen
            setUser={setUser}
            users={users}
            error={error}
            retry={fetchRetry}
          />
        </>
      )}
    </>
  );
}

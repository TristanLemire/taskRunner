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
import { User } from "./src/typing";
import { COLORS, FONTSIZES } from "./src/assets/colors";

const Tab = createBottomTabNavigator();
export const { Provider, Consumer } = createContext({});

type GetIconProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  focused: boolean;
  color: string;
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<boolean>(false);
  // ignore les warnings
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

  const randImage = [
    "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
    "https://www.gabrielgorgi.com/wp-content/uploads/2019/12/01.jpg",
    "https://static-cse.canva.com/blob/189281/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_4.jpg",
    "https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg",
    "https://wl-sympa.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
    "https://www.conseilsmarketing.com/wp-content/uploads/2020/03/flower-child-336658_1280-640x427.jpg",
    "https://static-cse.canva.com/blob/189272/canva_creer_photo_de_profil.png",
    "https://swello.com/fr/blog/wp-content/uploads/2018/07/profil-personnel.jpg",
    "https://phototrend.fr/wp-content/uploads/2017/04/kal-visuals-592051-940x627.jpg",
    "https://img-19.ccm2.net/NxJ_d9M2a9aFdJWQO29_Ft2dSQI=/1240x/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg",
  ];

  const fetchUsers = () => {
    setError(false);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const newJson = json.map((item: User) => {
          return {
            ...item,
            image: randImage[Math.floor(Math.random() * randImage.length)],
          };
        });
        setUsers(newJson);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    fetchUsers();
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
                activeTintColor: COLORS.primary,
                inactiveTintColor: COLORS.black,
                tabStyle: { borderColor: COLORS.primary, borderTopWidth: 1.5 },
                style: {
                  alignItems: "center",
                },
                labelStyle: {
                  fontSize: FONTSIZES.small,
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
            retry={fetchUsers}
          />
        </>
      )}
    </>
  );
}

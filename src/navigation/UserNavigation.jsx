import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserScreen } from "../subApps/User/UserScreen";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Consumer } from "../../App";

import { COLORS } from "../assets/colors";

const Stack = createStackNavigator();

export function UserNavigation(props) {
  const style = UserNavigationStyle();

  const {
    route: {
      params: {
        user,
        user: { name },
      },
    },
  } = props;

  return (
    <Consumer>
      {(value) => (
        <Stack.Navigator>
          <Stack.Screen
            name="User"
            component={UserScreen}
            initialParams={{
              user: user,
            }}
            options={{
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => value.onChange(null)}
                  style={style.container}
                >
                  <Ionicons
                    name={"ios-exit-outline"}
                    size={25}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
              ),
              title: `${name}`,
              headerStyle: {
                backgroundColor: COLORS.primary,
                shadowRadius: 0,
                shadowOffset: {
                  height: 0,
                },
              },
              headerTitleStyle: {
                color: COLORS.white,
              },
            }}
          />
        </Stack.Navigator>
      )}
    </Consumer>
  );
}

const UserNavigationStyle = () =>
  StyleSheet.create({
    container: {
      marginRight: 24,
    },
  });

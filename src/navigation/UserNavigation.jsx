import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserScreen } from "../subApps/User/UserScreen";
import { StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

export function UserNavigation(props) {
  const navigation = useNavigation();
  const UserNavigationStyleContextual = UserNavigationStyle();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserScreen}
        initialParams={{
          user: props.route.params.user,
        }}
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => props.route.params.onChange(null)}
              style={UserNavigationStyleContextual.container}
            >
              <Ionicons name={"ios-exit-outline"} size={25} color={"#fff"} />
            </TouchableOpacity>
          ),
          title: `${props.route.params.user.name}`,
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

const UserNavigationStyle = () =>
  StyleSheet.create({
    container: {
      marginRight: 15,
    },
  });

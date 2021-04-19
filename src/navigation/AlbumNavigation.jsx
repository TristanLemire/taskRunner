import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AlbumScreen } from "../subApps/Album/AlbumScreen";

const Stack = createStackNavigator();

export function AlbumNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Album"
        component={AlbumScreen}
        initialParams={{
          user: props.route.params.user,
        }}
        options={{
          // headerLeft: () => (
          //   <TouchableOpacity
          //     onPress={() => navigation.navigate("Album")}
          //     style={UserNavigationStyleContextual.container}
          //   >
          //     <Ionicons name={"ios-arrow-back"} size={30} color={"#fff"} />
          //   </TouchableOpacity>
          // ),
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

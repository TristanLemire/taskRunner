import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostScreen } from "../subApps/Post/PostScreen";

const Stack = createStackNavigator();

export function PostNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Post"
        component={PostScreen}
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

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostDetailScreen } from "../subApps/Post/PostDetailScreen";

const Stack = createStackNavigator();

export function PostDetailNavigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        initialParams={{
          user: props.route.params.user,
        }}
        options={{
          // headerRight: () => (
          //     <TouchableOpacity
          //         onPress={() => value.onChange(null)}
          //         style={PostDetailNavigationStyleContextual.container}
          //     >
          //         <Ionicons
          //             name={"ios-exit-outline"}
          //             size={25}
          //             color={"#fff"}
          //         />
          //     </TouchableOpacity>
          // ),
          headerStyle: {
            backgroundColor: "#ff7A00",
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
    </Stack.Navigator>
  );
}

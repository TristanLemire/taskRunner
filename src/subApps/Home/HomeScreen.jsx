import React from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

export function HomeScreen(props) {
  const HomeScreenContextual = HomeScreenStyle();
  return (
    <>
      {props.users !== null && (
        <SafeAreaView>
          <ScrollView>
            <Text>Choose a user</Text>
            {console.log(props.users)}
            <FlatList
              data={props.users}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => props.setUser(item)}
                  style={HomeScreenContextual.container}
                >
                  <View>
                    <Text>{item.name}</Text>
                    <Text>{item.email}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
}

const HomeScreenStyle = () =>
  StyleSheet.create({
    container: {
      margin: 8,
      padding: 8,
      borderWidth: 1,
      borderColor: "black",
    },
  });

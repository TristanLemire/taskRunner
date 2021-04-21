import * as React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import { MiniPost } from "./Components/MiniPost";
import { useNavigation } from "@react-navigation/native";

export function PostScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <TouchableOpacity
        onPress={() => navigation.navigate("PostDetail")}
        style={styles.container}
      >
        <MiniPost
        // post={post}
        ></MiniPost>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-evenly",
    maxHeight: 120,
  },
  containerTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  containerText: {
    fontSize: 14,
  },
});

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
});

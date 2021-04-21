import * as React from "react";
import { Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export function PostDetailScreen(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Post</Text>
    </View>
  );
}

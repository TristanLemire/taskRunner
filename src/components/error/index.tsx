import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";

type ErrorMessageProps = {
  message: string;
  retry: () => void;
};

export const ErrorMessage = (props: ErrorMessageProps) => {
  const UserNavigationStyleContextual = UserNavigationStyle();
  return (
    <View style={UserNavigationStyleContextual.container}>
      <View style={UserNavigationStyleContextual.header}>
        <Text style={UserNavigationStyleContextual.title}>Error</Text>
        <TouchableOpacity onPress={() => props.retry()}>
          <Ionicons name={"close-circle-outline"} size={20} color={"#181818"} />
        </TouchableOpacity>
      </View>
      <Text style={UserNavigationStyleContextual.message}>{props.message}</Text>
      <TouchableOpacity
        onPress={() => props.retry()}
        style={UserNavigationStyleContextual.button}
      >
        <Text>Réessayer</Text>
      </TouchableOpacity>
    </View>
  );
};

const UserNavigationStyle = () =>
  StyleSheet.create({
    container: {
      backgroundColor: "#FF9494",
      padding: 16,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: { fontWeight: "700", fontSize: 16, color: "#171717" },
    message: {
      color: "#171717",
      marginTop: 16,
    },
    button: {
      width: Dimensions.get("window").width / 1.1,
      borderColor: "#171717",
      borderWidth: 1,
      alignItems: "center",
      padding: 5,
      marginTop: 16,
    },
  });

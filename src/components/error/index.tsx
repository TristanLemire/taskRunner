import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SPACES, FONTSIZES } from "../../assets/tokens";


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
          <Ionicons name={"close-circle-outline"} size={SPACES.large} color={COLORS.black} />
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
      backgroundColor: COLORS.error,
      padding: SPACES.xdefault,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: { fontWeight: "700", fontSize: FONTSIZES.default, color: COLORS.black},
    message: {
      color: COLORS.black,
      marginTop: SPACES.xdefault,
    },
    button: {
      width: Dimensions.get("window").width / 1.1,
      borderColor: COLORS.black,
      borderWidth: 1,
      alignItems: "center",
      padding: SPACES.small,
      marginTop: SPACES.xdefault,
    },
  });

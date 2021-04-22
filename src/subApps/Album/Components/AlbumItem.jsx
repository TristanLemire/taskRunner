import * as React from "react";

import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { COLORS, FONTSIZES, SPACES } from "../../../assets/tokens";

export function AlbumItem(props) {
  const AlbumContextual = AlbumStyle();

  return (
    <View style={AlbumContextual.cardBody}>
      <Image
        source={{ uri: `https://picsum.photos/id/${props.id}/200/300` }}
        style={AlbumContextual.cardImage}
      />
      <Text numberOfLines={1} style={AlbumContextual.cardTitle}>
        {props.title}
      </Text>
    </View>
  );
}

const AlbumStyle = () =>
  StyleSheet.create({
    cardBody: {
      width: Dimensions.get("window").width / 2.2,
      marginBottom: SPACES.large,
      backgroundColor: COLORS.white,
    },
    cardImage: {
      width: Dimensions.get("window").width / 2.2,
      height: 175,
      resizeMode: "cover",
    },
    cardTitle: {
      fontSize: FONTSIZES.default,
      color: COLORS.black,
      padding: SPACES.default,
    },
  });

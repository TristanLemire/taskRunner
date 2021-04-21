import React, { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";

import { AlbumItem } from "./Components/AlbumItem";

import { COLORS, SPACES } from "../../assets/tokens";

export function AlbumScreen(props) {
  const [albums, setAlbums] = useState(null);
  const [isPending, setIspending] = useState(false);
  const navigation = useNavigation();

  const getAlbums = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${props.route.params.user.id}`
    )
      .then((response) => response.json())
      .then((json) => {
        setIspending(false), setAlbums(json);
      });
  };
  useEffect(() => {
    setIspending(true);
    getAlbums();
  }, []);

  const AlbumContextual = AlbumStyle();

  return (
    <View style={AlbumContextual.cardContainer}>
      {isPending ? (
        <ActivityIndicator
          style={{ marginTop: 100 }}
          size="large"
          color={COLORS.primary}
        />
      ) : (
        <FlatList
          data={albums}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Photo", { albumId: item.id })}
              style={AlbumContextual.cardRow}
            >
              <AlbumItem id={item.id} title={item.title} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const AlbumStyle = () =>
  StyleSheet.create({
    cardContainer: {
      flex: 1,
      padding: SPACES.default,
    },
    cardRow: {
      flex: 1,
      marginLeft: SPACES.default,
      marginRight: SPACES.default,
      flexDirection: "row",
      justifyContent: "center",
    },
  });

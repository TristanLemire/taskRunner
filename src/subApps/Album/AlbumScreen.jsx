import * as React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { AlbumItem } from "./Components/AlbumItem";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export function AlbumScreen(props) {
  const [album, setAlbum] = useState(null);
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
          color="#ff7A00"
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
      padding: 10,
    },
    cardRow: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      flexDirection: "row",
      justifyContent: "center",
    },
  });

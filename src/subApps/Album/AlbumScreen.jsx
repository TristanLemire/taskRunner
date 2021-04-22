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
import { ErrorMessage } from "../../components/error";

export function AlbumScreen(props) {
  const [albums, setAlbums] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const getAlbums = () => {
    setError(false);
    setIspending(true);
    fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${props.route.params.user.id}`
    )
      .then((response) => response.json())
      .then((json) => {
        setIspending(false), setAlbums(json);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    getAlbums();
  }, []);

  const AlbumContextual = AlbumStyle();

  if (error) {
    return (
      <ErrorMessage
        message={
          "Oups ! Une erreur s'est glissée dans la page, veuillez réessayer."
        }
        retry={() => getAlbums()}
      />
    );
  } else if (isPending) {
    return (
      <View style={AlbumContextual.cardContainer}>
        <ActivityIndicator
          style={{ marginTop: 100 }}
          size="large"
          color={COLORS.primary}
        />
      </View>
    );
  } else
    return (
      <View style={AlbumContextual.cardContainer}>
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

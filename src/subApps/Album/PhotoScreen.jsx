import * as React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";

export function PhotoScreen(props) {
  const [photos, setPhotos] = useState(null);
  const [isPending, setIspending] = useState(false);

  const getImages = () => {
    setIspending(true);
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${props.route.params.albumId}`
    )
      .then((response) => response.json())
      .then((json) => {
        setIspending(false), setPhotos(json);
      });
  };

  useEffect(() => {
    getImages();
  }, []);

  const PhotoContextual = PhotoStyle();

  return (
    <View>
      {isPending ? (
        <>
          <ActivityIndicator
            style={{ marginTop: 100 }}
            size="large"
            color="#ff7A00"
          />
        </>
      ) : (
        <FlatList
          data={photos}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View>
                <Image
                  source={{ uri: item.url }}
                  style={PhotoContextual.cardImage}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const PhotoStyle = () =>
  StyleSheet.create({
    cardImage: {
      width: Dimensions.get("window").width / 2,
      height: 150,
    },
  });

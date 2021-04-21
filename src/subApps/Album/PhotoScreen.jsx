import * as React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import Ionicons from "react-native-vector-icons/Ionicons";

export function PhotoScreen(props) {
  const [photos, setPhotos] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [images, setImages] = useState(null);
  const [viewModal, setViewModal] = useState(false);
  const [index, setIndex] = useState(null);

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

  useEffect(() => {
    photos &&
      setImages(
        photos.reduce((acc, curr) => {
          acc.push({ url: curr.url });
          return acc;
        }, [])
      );
  }, [photos]);

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
        <>
          <FlatList
            data={images}
            numColumns={2}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  setIndex(index), setViewModal(true);
                }}
              >
                <View>
                  <Image
                    source={{ uri: item.url }}
                    style={PhotoContextual.cardImage}
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      )}
      <Modal visible={viewModal} transparent={true}>
        <ImageViewer
          imageUrls={images}
          index={index}
          enableSwipeDown={true}
          onSwipeDown={() => {
            setViewModal(false), setIndex(null);
          }}
        />
      </Modal>
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

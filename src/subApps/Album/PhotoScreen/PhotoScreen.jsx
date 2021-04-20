import * as React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {useEffect, useState} from "react";

export function PhotoScreen(props) {
  const [photos, setPhotos] = useState(null);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`)
    .then((response) => response.json())
    .then((json) => setPhotos(json));
  }, []);
  
  const PhotoContextual = PhotoStyle();
  
  return (
    <View>
      <FlatList
        data={photos}
        numColumns={2}
        renderItem={({ item }) =>
          <TouchableOpacity>
            <View>
              <Image
                source={{uri: item.url}}
                style={PhotoContextual.cardImage}
              />
            </View>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const PhotoStyle = () =>
  StyleSheet.create ({
    cardImage: {
      width: 150,
      height: 150
    }
  });

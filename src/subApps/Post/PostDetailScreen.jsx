import React, { useEffect, useState } from "react";

import {
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Pressable,
  StyleSheet
} from "react-native";
import { ListItem } from "react-native-elements";
import AddModal from "../../components/Modal/Modal";

export function PostDetailScreen(props) {
  const {
    route: {
      params: {
        post: { id: postId, body, title, userId },
      },
    },
  } = props;

  const [comments, setComments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((json) => {
        setComments(
          // console.log("json", json)
          json.filter((item) => item.postId === props.route.params.post.id)
        );
        setIsPending(false);
      });
  };

  function handlePress() {
    console.log('modal', modalVisible);
    setModalVisible(true);
  }

  useEffect(() => {
    setIsPending(true);
    getComments();
  }, []);

  // console.log("comments", comments);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>

      <AddModal modalVisible={modalVisible} onPress={handlePress}/>
      
      <Pressable style={[styles.button, styles.buttonClose]} onPress={() => handlePress()}>
        <Text>Ajouter un commentaire</Text>
      </Pressable>

      <ListItem bottomDivider pad={16}>
        <Text>Commentaires</Text>
        <ListItem.Content>
          <ListItem.Title>
            <Text>name</Text>
          </ListItem.Title>

          <ListItem.Subtitle>
            <Text>Comment body</Text>
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

      <ScrollView>
        {isPending ? (
          <ActivityIndicator
            style={{ marginTop: 100 }}
            size="large"
            color="#ff7A00"
          />
        ) : (
          <FlatList
            data={comments}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("PostDetail", { comment: item })
                }
              >
                <Text>Coucou</Text>
              </TouchableOpacity>
            )}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
})

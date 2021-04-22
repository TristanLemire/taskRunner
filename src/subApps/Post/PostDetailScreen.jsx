import React, { useEffect, useState } from "react";

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { MiniComment } from "./Components/MiniComment";
import { AddModal } from "../../components/Modal/Modal";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function PostDetailScreen(props) {
  const style = PostDetailScreenStyle();

  const {
    route: {
      params: {
        post: { id: postId, body, title },
        user,
      },
    },
  } = props;

  const [comments, setComments] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  console.log('comments', comments);

  const closeModal = () => {
    setModalVisible(false);
  };

  const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((json) => {
        setComments(
          json.filter((item) => item.postId === props.route.params.post.id)
        );
        setIsPending(false);
      });
    getLocalStorageComments();
  };

  const getLocalStorageComments = async () => {
    try {
      const localStorageComments = await AsyncStorage.getItem('comments')
      // console.log('localStorageComments', localStorageComments);
      setComments(...localStorageComments)
    } catch(e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    setIsPending(true);
    getComments();
  }, []);

  return (
    <View style={style.page}>
      <View style={style.postContainer}>
        <View style={{ margin: 24 }}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.body}>{body}</Text>
        </View>

        <View style={style.buttonContainer}>
          <TouchableOpacity
            style={style.buttonComment}
            onPress={() => setModalVisible(true)}
          >
            <Text style={style.buttonText}>AJOUTER UN COMMENTAIRE</Text>
          </TouchableOpacity>
        </View>
        <View style={style.commentContainer}>
          <Text style={style.commentTitle}>COMMENTAIRES</Text>

          <ScrollView>
            {isPending ? (
              <ActivityIndicator
                style={{ marginTop: 100 }}
                size="large"
                color="white"
              />
            ) : (
              <FlatList
                data={comments}
                renderItem={({ item }) => <MiniComment comment={item} />}
              />
            )}
          </ScrollView>
        </View>
      </View>
      <AddModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        user={user}
      />
    </View>
  );
}

const PostDetailScreenStyle = () =>
  StyleSheet.create({
    page: {
      flex: 1,
    },
    postContainer: {
      flex: 1,
    },
    title: {
      color: "#20232a",
      fontSize: 20,
      fontWeight: "bold",
    },
    body: {
      fontSize: 15,
      marginTop: 16,
      lineHeight: 22,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
      width: "80%",
    },
    buttonComment: {
      backgroundColor: "#FF7A00",
      borderRadius: 100,
      height: "40%",
      justifyContent: "center",
    },
    commentContainer: {
      flex: 3,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      backgroundColor: "#FF7A00",
    },
    commentTitle: {
      fontSize: 20,
      alignSelf: "center",
      color: "white",
      marginVertical: 24,
    },
    buttonText: {
      textAlign: "center",
      color: "white",
    },
  });

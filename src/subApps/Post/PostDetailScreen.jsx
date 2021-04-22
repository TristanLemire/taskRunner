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

import { COLORS, FONTSIZES, SPACES } from "../../assets/tokens";

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

  const [comments, setComments] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const userMail = user.email;
  const [commentsLength, setCommentsLength] = useState(null);
  const [commentsApi, setCommentsApi] = useState([]);
  
  useEffect(() => {
    setIsPending(true);
    async function callAwait() {
      await getComments();
    }
    callAwait();
  }, []);
  
  console.log('comments', comments);
  
  const closeModal = () => {
    setModalVisible(false);
  };
  
  const getComments = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    const comments = await response.json();
    setCommentsApi(comments);
    const responseLength = await fetch(`https://jsonplaceholder.typicode.com/comments`)
    const commentsLength = await responseLength.json();
    setCommentsLength(commentsLength.length)
    const filteredComments = await getLocalStorageComments();
    setComments([...filteredComments, ...comments]);
    setIsPending(false);
  };

  const getLocalStorageComments = async () => {
    try {
      var localStorageComments = await AsyncStorage.getItem('comments');
      localStorageComments = JSON.parse(localStorageComments)
      
      if (localStorageComments === null) return [];
      
      setCommentsLength(localStorageComments[0].id)
      const filteredComments = localStorageComments.filter( (comment) => {
        return comment.postId === postId; 
      });

      console.log('localStorageComments', filteredComments);
      return filteredComments;

    } catch(e) {
      console.log(e);
    }
  }

  const clearAppData = async function() {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
        console.log('data cleared')
    } catch (error) {
        console.error('Error clearing app data.');
    }
  }
  
  console.log(commentsLength);

  const saveComment = async (commentBody, commentTitle) => {
    const comment = {
      "body" : commentBody,
      "email" : userMail,
      "id": commentsLength + 1,
      "name": commentTitle,
      "postId": postId
    }
    try {
      var localStorageComments = await AsyncStorage.getItem('comments');
      
      if(localStorageComments !== null) {
        localStorageComments = JSON.parse(localStorageComments);
        console.log('jsonLocalStorageComments', localStorageComments);

        localStorageComments.unshift(comment);

      } else {
        localStorageComments = [];
        localStorageComments.unshift(comment);
      }
      const jsonComment = JSON.stringify(localStorageComments);
      await AsyncStorage.setItem('comments', jsonComment);
      
      const filteredComments = localStorageComments.filter( (comment) => {
        return comment.postId === postId; 
      });
      setComments([...filteredComments, ...commentsApi]);
      setCommentsLength(commentsLength + 1);
      closeModal();

    } catch(e) {
      console.log(e)
    }
    localStorageComments = await AsyncStorage.getItem('comments')
    console.log('Comments', localStorageComments);
  }

  return (
    <View style={style.page}>
      <View style={style.postContainer}>
        <View style={style.articleContainer}>
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
                color={COLORS.white}
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
        saveComment={saveComment}
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
    articleContainer: {
      margin: SPACES.large,
    },
    title: {
      color: COLORS.black,
      fontSize: FONTSIZES.large,
      fontWeight: "bold",
    },
    body: {
      fontSize: FONTSIZES.default,
      marginTop: SPACES.xdefault,
      lineHeight: SPACES.large,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
      width: "80%",
    },
    buttonComment: {
      backgroundColor: COLORS.primary,
      borderRadius: 100,
      height: "40%",
      justifyContent: "center",
    },
    commentContainer: {
      flex: 3,
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      backgroundColor: COLORS.primary,
    },
    commentTitle: {
      fontSize: FONTSIZES.large,
      alignSelf: "center",
      color: COLORS.white,
      marginVertical: SPACES.large,
    },
    buttonText: {
      textAlign: "center",
      color: COLORS.white,
    },
  });

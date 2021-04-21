import React, { useEffect, useState } from "react";

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { MiniComment } from "./Components/MiniComment";

export function PostDetailScreen(props) {
  const style = PostDetailScreenStyle();

  const {
    route: {
      params: {
        post: { id: postId, body, title },
      },
    },
  } = props;

  const [comments, setComments] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => response.json())
      .then((json) => {
        setComments(
          json.filter((item) => item.postId === props.route.params.post.id)
        );
        setIsPending(false);
      });
  };

  useEffect(() => {
    setIsPending(true);
    getComments();
  }, []);

  return (
    <View style={style.page}>
      <View style={style.postContainer}>
        <Text>{title}</Text>
        <Text>{body}</Text>
      </View>

      <View style={style.buttonContainer}>
        <TouchableOpacity style={style.buttonComment}>
          <Button color="white" title="Ajouter un commentaire"></Button>
        </TouchableOpacity>
      </View>

      <View style={style.commentContainer}>
        <Text style={style.commentTitle}>Commentaires</Text>

        <ScrollView>
          {isPending ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              style={style.flatList}
              data={comments}
              renderItem={({ item }) => (
                <MiniComment style={style.miniComment} comment={item} />
              )}
            />
          )}
        </ScrollView>
      </View>
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
    buttonContainer: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center",
    },
    buttonComment: {
      backgroundColor: "#FF7A00",
      borderRadius: 100,
      height: 50,
      width: 160,
    },
    commentContainer: {
      flex: 3,
      borderRadius: 30,
      backgroundColor: "#FF7A00",
    },
    commentTitle: {
      fontSize: 20,
      alignSelf: "center",
      color: "white",
      marginTop: 24,
    },
  });

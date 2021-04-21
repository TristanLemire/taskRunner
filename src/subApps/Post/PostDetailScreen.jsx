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
import { COLORS } from "../../assets/colors";
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
        <Text style={style.title}>{title}</Text>
        <Text style={style.body}>{body}</Text>
      </View>

      <View style={style.buttonContainer}>
        <TouchableOpacity style={style.buttonComment}>
          <Button color="white" title="Ajouter un commentaire" />
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
      margin: 24,
    },
    title: {
      color: COLORS.black,
      fontSize: 20,
      fontWeight: "bold",
    },
    body: {
      fontSize: 15,
      marginTop: 16,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: "center",
      alignSelf: "center",
      width: "80%",
    },
    buttonComment: {
      backgroundColor: COLORS.brandOrange,
      borderRadius: 100,
      height: "40%",
      justifyContent: "center",
    },
    commentContainer: {
      flex: 3,
      borderRadius: 30,
      backgroundColor: COLORS.brandOrange,
    },
    commentTitle: {
      fontSize: 20,
      alignSelf: "center",
      color: COLORS.white,
      marginVertical: 24,
    },
  });

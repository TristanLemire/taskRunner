import React, { useEffect, useState } from "react";

import {
  Text,
  TouchableOpacity,
  View,
  Button,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { ListItem } from "react-native-elements";
import { MiniComment } from "./Components/MiniComment";

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

  useEffect(() => {
    setIsPending(true);
    getComments();
  }, []);

  console.log("comments", comments);

  return (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Button title="Ajouter un commentaire"></Button>

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
            renderItem={({ item }) => <MiniComment comment={item} />}
          />
        )}
      </ScrollView>
    </View>
  );
}

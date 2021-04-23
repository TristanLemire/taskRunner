import React, { useState } from "react";
import {
  Modal,
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONTSIZES, SPACES } from "../../../assets/tokens";

export const AddCommentModal = ({ modalVisible, closeModal, saveComment }) => {
  const style = CommentModalStyle();
  const [commentTitle, setCommentTitle] = useState(null);
  const [commentBody, setCommentBody] = useState(null);
  const [isEmptyTitle, setIsEmptyTitle] = useState(false);
  const [isEmptyComment, setIsEmptyComment] = useState(false);

  return (
    <Modal animationType="fade" visible={modalVisible} transparent={true}>
      <View style={style.modal}>
        <View style={style.modalContainer}>
          <TouchableOpacity
            style={style.closeButton}
            onPress={() => {
              setCommentTitle(null),
                setCommentBody(null),
                setIsEmptyTitle(false),
                setIsEmptyComment(false),
                closeModal();
            }}
          >
            <Ionicons
              name="ios-close-circle"
              size={40}
              color={COLORS.primary}
            />
          </TouchableOpacity>
          <Text style={style.modalTitle}>Ajouter un commentaire</Text>
          <View style={style.input}>
            <Text style={style.inputTitle}>Titre</Text>
            <TextInput
              style={style.inputTextTitle}
              onChangeText={(value) => {
                setCommentTitle(value);
              }}
              value={commentTitle}
              placeholder={"Titre du commentaire"}
            />
            {isEmptyTitle && (
              <Text style={style.errorMessage}>
                Il manque le titre de votre commentaire
              </Text>
            )}
          </View>
          <View style={style.input}>
            <Text style={style.inputTitle}>Commentaire</Text>
            <TextInput
              multiline={true}
              numberOfLines={3}
              style={style.inputTextComment}
              onChangeText={(value) => setCommentBody(value)}
              value={commentBody}
              placeholder={"Mon commentaire ..."}
            />
            {isEmptyComment && (
              <Text style={style.errorMessage}>
                Il manque votre commentaire
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={
              commentTitle && commentBody ? style.button : style.buttonDisabled
            }
            onPress={() => {
              !commentTitle || !commentBody
                ? (!commentTitle && setIsEmptyTitle(true),
                  !commentBody && setIsEmptyComment(true))
                : (saveComment(commentBody, commentTitle),
                  setCommentTitle(null),
                  setCommentBody(null),
                  setIsEmptyTitle(false),
                  setIsEmptyComment(false));
            }}
          >
            <Text style={style.buttonText}>AJOUTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const CommentModalStyle = () =>
  StyleSheet.create({
    modal: {
      backgroundColor: "rgba(52, 52, 52, 0.609)",
      flex: 1,
      justifyContent: "center",
    },
    modalContainer: {
      borderRadius: 10,
      backgroundColor: COLORS.white,
      margin: SPACES.large,
      padding: SPACES.large,
      alignItems: "center",
    },
    closeButton: {
      position: "absolute",
      right: -13,
      top: -13,
    },
    modalTitle: {
      color: COLORS.black,
      textTransform: "uppercase",
      textAlign: "center",
      marginVertical: SPACES.large,
      fontSize: FONTSIZES.large,
    },
    input: {
      marginVertical: SPACES.large,
      width: Dimensions.get("screen").width / 1.3,
    },
    inputTitle: {
      fontWeight: "bold",
      marginBottom: SPACES.default,
    },
    inputTextTitle: {
      borderBottomWidth: 1,
      borderColor: COLORS.primary,
      alignSelf: "stretch",
    },
    inputTextComment: {
      borderWidth: 1,
      borderColor: COLORS.primary,
      borderRadius: 10,
      padding: SPACES.default,
      marginTop: SPACES.default,
    },
    errorMessage: {
      color: COLORS.error,
      marginTop: SPACES.xdefault,
    },

    button: {
      backgroundColor: COLORS.primary,
      width: 140,
      paddingVertical: SPACES.default,
      borderRadius: 50,
      marginTop: SPACES.large,
    },
    buttonDisabled: {
      backgroundColor: COLORS.lightGrey,
      width: 140,
      paddingVertical: SPACES.default,
      borderRadius: 50,
      marginTop: SPACES.large,
    },
    buttonText: {
      textAlign: "center",
      color: COLORS.white,
      fontSize: FONTSIZES.large,
    },
  });

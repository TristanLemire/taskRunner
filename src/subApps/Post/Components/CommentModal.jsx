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
import { COLORS } from "../../../assets/tokens";

export const AddCommentModal = ({ modalVisible, closeModal, saveComment }) => {
  const AddModalStyleContextual = AddModalStyle();
  const [commentTitle, setCommentTitle] = useState(null);
  const [commentBody, setCommentBody] = useState(null);
  const [isEmptyTitle, setIsEmptyTitle] = useState(false);
  const [isEmptyComment, setIsEmptyComment] = useState(false);

  return (
    <Modal animationType="fade" visible={modalVisible} transparent={true}>
      <View style={AddModalStyleContextual.modal}>
        <View style={AddModalStyleContextual.modalContainer}>
          <TouchableOpacity
            style={AddModalStyleContextual.clodeButton}
            onPress={() => {
              setCommentTitle(null),
                setCommentBody(null),
                setIsEmptyTitle(false),
                setIsEmptyComment(false),
                closeModal();
            }}
          >
            <Ionicons
              style={AddModalStyleContextual.icon}
              name="ios-close-circle"
              size={40}
              color="#ff7A00"
            />
          </TouchableOpacity>
          <Text style={AddModalStyleContextual.title}>
            AJOUTER UN COMMENTAIRE
          </Text>
          <View style={AddModalStyleContextual.input}>
            <Text style={AddModalStyleContextual.inputTitle}>Titre</Text>
            <TextInput
              style={AddModalStyleContextual.inputText}
              onChangeText={(value) => {
                setCommentTitle(value);
              }}
              value={commentTitle}
              placeholder={"Titre du commentaire"}
            />
            {isEmptyTitle && (
              <Text style={AddModalStyleContextual.errorMessage}>
                Il manque le titre de votre commentaire
              </Text>
            )}
          </View>
          <View style={AddModalStyleContextual.input}>
            <Text style={AddModalStyleContextual.textAreaTitle}>
              Commentaire
            </Text>
            <TextInput
              multiline={true}
              numberOfLines={3}
              style={AddModalStyleContextual.textArea}
              onChangeText={(value) => setCommentBody(value)}
              value={commentBody}
              placeholder={"Ecris ton commentaire ici"}
            />
            {isEmptyComment && (
              <Text style={AddModalStyleContextual.errorMessage}>
                Il manque votre commentaire
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={
              commentTitle && commentBody
                ? AddModalStyleContextual.button
                : AddModalStyleContextual.buttonDisabled
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
            <Text style={AddModalStyleContextual.buttonText}>AJOUTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const AddModalStyle = () =>
  StyleSheet.create({
    modal: {
      backgroundColor: "rgba(52, 52, 52, 0.609)",
      flex: 1,
      justifyContent: "center",
    },
    inputText: {
      borderBottomWidth: 1,
      borderColor: COLORS.primary,
      alignSelf: "stretch",
    },
    modalContainer: {
      backgroundColor: "white",
      margin: 24,
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
    },
    title: {
      textAlign: "center",
      marginBottom: 24,
      fontSize: 18,
    },
    textArea: {
      borderWidth: 1,
      borderColor: COLORS.primary,
      borderRadius: 10,
      padding: 10,
    },
    input: {
      marginBottom: 16,
      width: Dimensions.get("screen").width / 1.3,
    },
    inputTitle: {
      fontWeight: "bold",
    },
    textAreaTitle: {
      marginBottom: 8,
      fontWeight: "bold",
    },
    button: {
      backgroundColor: COLORS.primary,
      width: 140,
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: 50,
    },
    buttonDisabled: {
      backgroundColor: COLORS.lightGrey,
      width: 140,
      paddingTop: 8,
      paddingBottom: 8,
      borderRadius: 50,
    },
    buttonText: {
      textAlign: "center",
      color: "white",
      fontSize: 20,
    },
    clodeButton: {
      position: "absolute",
      right: -13,
      top: -13,
    },
    errorMessage: {
      color: "red",
      marginTop: 8,
    },
  });

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

export const AddModal = ({ modalVisible, closeModal, user }) => {
  const AddModalStyleContextual = AddModalStyle();
  const [title, setTitle] = useState(null);
  const [comment, setComment] = useState(null);
  const userMail = user.email;

  return (
    <Modal animationType="fade" visible={modalVisible} transparent={true}>
      <View style={AddModalStyleContextual.modal}>
        <View style={AddModalStyleContextual.modalContainer}>
          <TouchableOpacity
            style={AddModalStyleContextual.clodeButton}
            onPress={() => {
              setTitle(null), setComment(null), closeModal();
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
              onChangeText={(value) => setTitle(value)}
              value={title}
              placeholder={"titre de cummentaire"}
            />
          </View>
          <View style={AddModalStyleContextual.input}>
            <Text style={AddModalStyleContextual.textAreaTitle}>
              Commantaire
            </Text>
            <TextInput
              multiline={true}
              numberOfLines={3}
              style={AddModalStyleContextual.textArea}
              onChangeText={(value) => setComment(value)}
              value={comment}
              placeholder={"titre de cummentaire"}
            />
          </View>
          <TouchableOpacity
            style={AddModalStyleContextual.button}
            onPress={() =>
              console.log("ici faire le post du comment en localstorage")
            }
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
      borderColor: "#ff7a00",
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
      borderColor: "#ff7a00",
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
      backgroundColor: "#ff7a00",
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
    // centeredView: {
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   marginTop: 22,
    // },
    // modalView: {
    //   margin: 20,
    //   backgroundColor: "white",
    //   borderRadius: 20,
    //   padding: 35,
    //   alignItems: "center",
    //   shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 4,
    //   elevation: 5,
    // },
    // button: {
    //   borderRadius: 20,
    //   padding: 10,
    //   elevation: 2,
    // },
    // buttonOpen: {
    //   backgroundColor: "#F194FF",
    // },
    // buttonClose: {
    //   backgroundColor: "#2196F3",
    // },
    // modalClose: {
    //   color: "white",
    //   fontWeight: "bold",
    //   textAlign: "center",
    // },
    // modalText: {
    //   marginBottom: 15,
    //   textAlign: "center",
    // },
  });

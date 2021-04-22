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

export const TodoModal = ({ modalVisible, closeModal, user }) => {
  const AddModalStyleContextual = AddModalStyle();
  const [name, setName] = useState(null);
  const userMail = user;

  return (
    <Modal animationType="fade" visible={modalVisible} transparent={true}>
      <View style={AddModalStyleContextual.modal}>
        <View style={AddModalStyleContextual.modalContainer}>
          <TouchableOpacity
            style={AddModalStyleContextual.clodeButton}
            onPress={() => {
              setName(null), closeModal();
            }}
          >
            <Ionicons
              style={AddModalStyleContextual.icon}
              name="ios-close-circle"
              size={40}
              color="#ff7A00"
            />
          </TouchableOpacity>
          <Text style={AddModalStyleContextual.title}>TACHE</Text>
          <View style={AddModalStyleContextual.input}>
            <TextInput
              style={AddModalStyleContextual.inputText}
              onChangeText={(value) => setName(value)}
              value={name}
              placeholder={"Le nom de ma tache"}
            />
          </View>
          <TouchableOpacity
            style={AddModalStyleContextual.button}
            onPress={() =>
              console.log("ici faire le post du todo en localstorage")
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
      marginBottom: 30,
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
  });

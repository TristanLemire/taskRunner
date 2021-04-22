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
import { COLORS } from "../../assets/tokens";

export const TodoModal = ({ modalVisible, closeModal, onValidate }) => {
  const AddModalStyleContextual = AddModalStyle();
  const [name, setName] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <Modal animationType="fade" visible={modalVisible} transparent={true}>
      <View style={AddModalStyleContextual.modal}>
        <View style={AddModalStyleContextual.modalContainer}>
          <TouchableOpacity
            style={AddModalStyleContextual.clodeButton}
            onPress={() => {
              setName(null), setIsEmpty(false), closeModal();
            }}
          >
            <Ionicons
              style={AddModalStyleContextual.icon}
              name="ios-close-circle"
              size={40}
              color={COLORS.primary}
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
            {isEmpty && (
              <Text style={AddModalStyleContextual.errorMessage}>
                Il manque le nom de votre tache
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={
              name
                ? AddModalStyleContextual.button
                : AddModalStyleContextual.buttonDisabled
            }
            onPress={() => {
              name
                ? (onValidate(name),
                  setName(null),
                  setIsEmpty(false),
                  closeModal())
                : setIsEmpty(true);
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

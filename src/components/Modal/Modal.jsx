import React from "react";
import { Modal, Pressable, Text, View } from "react-native";

const AddModal = (props) => {

  const { modalVisible } = props

  function handlePress(event) {
    console.log('modal' ,modalVisible)
    props.onChange(event.target.value)
  }

  return (
    <View style={AddModalStyle.centeredView}>
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal closed");
        handlePress(!modalVisible)
      }}
      >
        <View style={AddModalStyle.centeredView}>
          <View style={AddModalStyle.modalView}>
            <Text style={AddModalStyle.modalText}>Test !</Text>
            <Pressable onPress={() => handlePress(!modalVisible)}>
              <Text style={AddModalStyle.modalClose}>Fermer la modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const AddModalStyle = () =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    modalClose: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  })

export default AddModal
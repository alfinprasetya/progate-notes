import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "../components/customTextinput";
import CustomButton from "../components/customButton";

const EditNote = ({ setCurrentPage, editNote, onEdit }) => {
  const [title, setTitle] = useState(onEdit.title);
  const [desc, setDesc] = useState(onEdit.desc);

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={() => {
            editNote(onEdit.id, title, desc);
            setCurrentPage("home");
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#F4F6FB"
          color="#2f4a86"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage("home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#F4F6FB",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default EditNote;

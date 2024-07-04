import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/customButton";

const NoteCard = ({ item, setCurrentPage, deleteNote, setOnEdit }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text style={styles.cardText}>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#2f4a86"
        color="#fff"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setOnEdit(item);
          setCurrentPage("edit");
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          deleteNote(item.id);
        }}
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, deleteNote, setOnEdit }) => (
  <View style={styles.container}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard
          item={item}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setOnEdit={setOnEdit}
        />
      )}
      keyExtractor={(item) => item.id}
    />
    <CustomButton
      backgroundColor="#F4F6FB"
      color="#2f4a86"
      text="Tambahkan Note"
      width="100%"
      onPress={() => {
        setCurrentPage("add");
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: "#F4F6FB",
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 5,
  },
  cardText: {
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Home;

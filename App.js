import React, { useState } from "react";
import Home from "./src/screens/home";
import { StyleSheet, View } from "react-native";
import AddNote from "./src/screens/addNote";
import EditNote from "./src/screens/editNote";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  editNote,
  onEdit,
  setOnEdit,
}) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          setOnEdit={setOnEdit}
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          editNote={editNote}
          onEdit={onEdit}
        />
      );
    default:
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [onEdit, setOnEdit] = useState();

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const deleteNote = (id) => {
    const newNotes = noteList.filter((value) => value.id !== id);
    setNoteList(newNotes);
  };

  const editNote = (id, title, desc) => {
    const notes = noteList;
    const index = noteList.findIndex((v) => v.id == id);
    notes[index].title = title;
    notes[index].desc = desc;

    setNoteList(notes);
  };

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
    {
      id: 2,
      title: "Note kedua",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);

  return (
    <View style={styles.container}>
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
        addNote={addNote}
        deleteNote={deleteNote}
        editNote={editNote}
        onEdit={onEdit}
        setOnEdit={setOnEdit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#2f4a86",
    paddingTop: 10,
    color: "white",
  },
});

export default App;

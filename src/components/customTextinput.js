import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) => {
  const styles = StyleSheet.create({
    textInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "#F4F6FB",
      padding: 10,
      borderRadius: 10,
      color: "#FFF",
    },
    label: {
      marginBottom: 10,
      color: "#fff",
    },
  });

  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
};

export default CustomTextInput;

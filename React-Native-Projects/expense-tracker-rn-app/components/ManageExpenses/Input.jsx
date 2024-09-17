import { Text, View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../utils/colors.js";

export default function Input({ label, style, textInputConfig, invalid }) {
  const inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyle.push(styles.invalidField);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidText]}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  label: {
    color: Colors.primary100,
    marginBottom: 4,
    fontSize: 12,
    fontfamily: "open-sans",
  },
  input: {
    backgroundColor: Colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: Colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidText: {
    fontFamily: "montserrat-bold",
    textAlign: "center",
  },
  invalidField: {
    backgroundColor: Colors.error50,
  },
});

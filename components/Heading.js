import { Text, StyleSheet } from "react-native";

export default function Heading(props) {
  return <Text style={[styles.heading]}>{props.text}</Text>;
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    padding: 20,
    color: "white",
    letterSpacing: 2,
  },
});

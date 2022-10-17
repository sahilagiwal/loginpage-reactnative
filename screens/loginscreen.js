import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  Provider as PaperProvider,
  TextInput,
  Button,
} from "react-native-paper";
import Heading from "../components/Heading";
export default function LoginScreen() {
  const [text, setText] = React.useState("");
  return (
    <PaperProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />

          <View style={[styles.form, { paddingTop: 40 }]}>
            <Heading text="Login" />
            <View style={styles.internalform}>
              <TextInput
                right={<TextInput.Icon name="email" />}
                style={styles.input}
                label="Email"
                value={text}
                selectionColor="#E25462"
                activeUnderlineColor="#E25462"
                underlineColor="#fff"
                onChangeText={(text) => setText(text)}
              />
              <TextInput
                right={<TextInput.Icon name="lock" />}
                style={styles.input}
                label="Password"
                value={text}
                secureTextEntry
                selectionColor="#E25462"
                activeUnderlineColor="#E25462"
                underlineColor="#fff"
                onChangeText={(text) => setText(text)}
              />
              <Button
                style={{ marginTop: 20, borderColor: "white", borderWidth: 3 }}
                icon="login"
                mode="outlined"
                color="#fff"
                buttonColor="#fff"
                onPress={() => console.log("Pressed")}
              >
                Login
              </Button>
            </View>
            <Text
              style={{ color: "white", textAlign: "right", paddingRight: 20 }}
            >
              Forgot Password?
            </Text>
            <View
              style={{
                alignItems: "center",
                alignContent: "center",
                paddingTop: "5%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Button
                  style={{
                    marginTop: 20,
                    borderColor: "white",
                    borderWidth: 3,
                    marginRight: 10,
                  }}
                  icon="google"
                  mode="outlined"
                  color="#fff"
                  buttonColor="#fff"
                  onPress={() => console.log("Pressed")}
                >
                  Sign In
                </Button>
                <Button
                  style={{
                    marginTop: 20,
                    borderColor: "white",
                    borderWidth: 3,
                  }}
                  icon="facebook"
                  mode="outlined"
                  color="#fff"
                  buttonColor="#fff"
                  onPress={() => console.log("Pressed")}
                >
                  Sign In
                </Button>
              </View>
              <Button
                style={{
                  marginTop: 20,
                  borderColor: "white",
                  borderWidth: 3,
                  width: 250,
                }}
                icon="account-plus"
                mode="contained"
                color="#fff"
                buttonColor="#fff"
                onPress={() => console.log("Pressed")}
              >
                Join Now
              </Button>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#E25462",
    height: "100%",
    borderTopStartRadius: 32,
    borderTopEndRadius: 32,
    shadowColor: "#000",
    shadowOffset: { width: -10, height: 5 },
    shadowOpacity: 3,
    shadowRadius: 10,
  },
  logo: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
  internalform: {
    alignItems: "center",
    alignContent: "center",
  },
  input: {
    marginTop: "3%",
    width: "80%",
    backgroundColor: "white",
    height: 60,
  },
});

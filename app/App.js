import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, DarkTheme, Button } from "react-native-paper";

export default class App extends React.Component {
  state = {
    email: "",
    password: ""
  };

  btnPressed() {
    Alert.alert("Title");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Page</Text>

        <View style={styles.inputContainer}>
          <TextInput
            mode="flat"
            label="Email"
            onChangeText={email => this.setState({ email })}
            style={styles.email}
            theme={inputTheme}
          />
          <TextInput
            mode="flat"
            label="Senha"
            onChange={password => this.setState({ password })}
            style={styles.password}
            theme={inputTheme}
            secureTextEntry={true}
          />
          <View style={styles.buttons}>
            <Button onPress={this.btnPressed} mode="contained" color="#32A286">
              Login
            </Button>
            <Button
              onPress={this.btnPressed}
              mode="contained"
              style={styles.regs}
              color="#32A286"
            >
              Registrar
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const inputTheme = {
  ...DarkTheme,
  roundness: 4,
  colors: {
    background: "#4768F0"
  },
  fonts: { medium: "Open Sans" }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#33318B"
  },
  title: {
    color: "#32A286",
    textAlign: "center",
    fontSize: 30,
    paddingTop: "20%"
  },
  inputContainer: {
    flex: 1
  },
  email: {
    marginTop: "20%",
    marginLeft: 10,
    marginRight: 10
  },
  password: {
    marginTop: "5%",
    marginLeft: 10,
    marginRight: 10
  },
  buttons: {
    flexDirection: "column",
    margin: 20,
    alignItems: "center"
  },
  regs: {
    marginTop: "3%"
  }
});
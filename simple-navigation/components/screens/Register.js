import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput
} from "react-native";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      cpf: ""
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>- REGISTER -</Text>

          <Text style={styles.label}>UserName</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            underlineColorAndroid="transparent"
          />

          <Text style={styles.label}>UserName</Text>
          <TextInput
            style={styles.textInput}
            placeholder="CPF"
            onChangeText={cpf => this.setState({ cpf })}
            underlineColorAndroid="transparent"
          />

          <Text style={styles.label}>UserName</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            underlineColorAndroid="transparent"
          />

          <Text style={styles.label}>UserName</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="transparent"
          />

          <Text style={styles.label}>UserName</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            onChangeText={password2 => this.setState({ password2 })}
            underlineColorAndroid="transparent"
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#4F38E8"
  },
  header: {
    marginTop: "10%",
    textAlign: "center",
    color: "#fff",
    marginBottom: "10%"
  },
  label: {
    marginTop: 10,
    marginLeft: "2%"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 16,
    marginBottom: 20,
    marginHorizontal: "2%",
    backgroundColor: "#fff",
    borderRadius: 40
  }
});

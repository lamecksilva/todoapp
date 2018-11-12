import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
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

  registrar = () => {
    fetch("http://192.168.15.19:4000/register", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: this.state.username,
        email: this.state.email,
        senha: this.state.password,
        cpf: this.state.cpf,
        cep: 123
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success === true) {
          Alert.alert("Registrado com sucesso", [
            {
              text: "Login",
              onPress: () => console.log("Login button alert pressed")
            }
          ]);
          this.props.navigation.navigate("Home");
        } else {
          alert(res.message);
        }
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <ScrollView style={styles.container}>
          <Text style={styles.header}>- REGISTER -</Text>

          <Text style={styles.label}>UserName</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            underlineColorAndroid="transparent"
          />

          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.textInput}
            placeholder="CPF"
            onChangeText={cpf => this.setState({ cpf })}
            underlineColorAndroid="transparent"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            underlineColorAndroid="transparent"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />

          <Text style={styles.label}>Confirm your password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Confirm Password"
            onChangeText={password2 => this.setState({ password2 })}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.regBtn} onPress={this.registrar}>
            <Text>Register</Text>
          </TouchableOpacity>
        </ScrollView>
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
    marginBottom: "10%",
    fontSize: 30
  },
  label: {
    marginTop: 10,
    marginLeft: "4%",
    color: "white",
    fontSize: 15,
    marginBottom: 2
  },
  textInput: {
    alignSelf: "stretch",
    padding: 10,
    marginBottom: 7,
    marginHorizontal: "2%",
    backgroundColor: "#fff",
    borderRadius: 40
  },
  regBtn: {
    alignSelf: "stretch",
    backgroundColor: "#01c853",
    padding: 15,
    alignItems: "center",
    borderRadius: 40,
    maxWidth: "90%",
    marginHorizontal: "10%",
    marginTop: "4%"
  }
});

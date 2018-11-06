import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem("user");
    if (value !== null) {
      this.props.navigation.navigate("Profile");
    }
  };

  login = () => {
    alert(this.state.username);

    fetch("http://192.168.15.19:5000/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success === true) {
          AsyncStorage.setItem("user", res.user);
          this.props.navigation.navigate("Profile");
        } else {
          alert(res.message);
        }
      })
      .done();
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View styles={styles.container}>
          <Text style={styles.header}>- LOGIN -</Text>

          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
            underlineColorAndroid="transparent"
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.btn} onPress={this.login}>
            <Text style={{ fontSize: 20 }}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.regBtn}
            onPress={() => this.props.navigation.navigate("Register")}
          >
            <Text style={{ fontSize: 15 }}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#3C44FF",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    textAlign: "center",
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 16,
    marginBottom: 20,
    marginHorizontal: "2%",
    backgroundColor: "#fff",
    borderRadius: 40
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#01c853",
    padding: 15,
    alignItems: "center",
    borderRadius: 40,
    maxWidth: "30%",
    marginHorizontal: "35%"
  },
  regBtn: {
    alignSelf: "stretch",
    padding: 7,
    alignItems: "center",
    backgroundColor: "#E89B0C",
    borderRadius: 30,
    maxWidth: "30%",
    marginHorizontal: "40%",
    marginTop: "2%"
  }
});

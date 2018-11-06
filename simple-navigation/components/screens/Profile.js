import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Profile extends React.Component {

  render() {
    return (
      <View styles={styles.container}>
        <Text style={styles.header}>Bem vindo, user</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3C44FF"
  },
  text: {
    color: "#fff"
  }
});

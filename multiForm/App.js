import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Wizard from "./src/components/Wizard";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Wizard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

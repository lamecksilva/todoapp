import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";

const Application = createStackNavigator(
  {
    Home: { screen: Login },
    Profile: { screen: Profile },
    Register: { screen: Register }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default class App extends React.Component {
  render() {
    return <Application />;
  }
}

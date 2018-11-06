import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Expo from "expo";
import { StackNavigator } from "react-navigation";


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text onPress={() => navigate("Profile")}>Navigate to Profile</Text>
      </View>
    );
  }
}


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text onPress={() => navigate("Home")}>Navigate to Home</Text>
      </View>
    );
  }
}

const NavigationApp = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
  },
  {
    navigationOptions: {
      header: false
    }
  }
);

export default class App extends React.Component {
  render() {
    return <NavigationApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

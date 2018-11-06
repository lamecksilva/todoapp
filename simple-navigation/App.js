import React from "react";
import { createStackNavigator } from "react-navigation";

import Login from "./components/screens/Login";
import Profile from "./components/screens/Profile";
import Register from "./components/screens/Register";

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

import React, { Component } from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import {
  Header,
  Container,
  Content,
  Body,
  Left,
  Button,
  Text,
  Icon
} from "native-base";
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button onPress={() => this.props.navigation.navigate("Dashboard")}>
          <Text>Login</Text>
        </Button>
        <Button onPress={() => alert("button pressed")}>
          <Text>Sign UP</Text>
        </Button>
        <Button onPress={() => this.props.navigation.navigate("CadastroPage")}>
          <Text>CadastroPage</Text>
        </Button>
      </View>
    );
  }
}

class CadastroPage extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate("Welcome"); // works best when the goBack is async
    return true;
  };

  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Welcome")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Text>{this.props.navigation.state.routeName}</Text>
          </Body>
        </Header>

        <Content>
          <Text style={{ textAlign: "center" }}>
            {this.props.navigation.state.routeName} aqui trosha
          </Text>
        </Content>
      </Container>
    );
  }
}

class Feed extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Text>{this.props.navigation.state.routeName}</Text>
          </Body>
        </Header>

        <Content>
          <Text style={{ textAlign: "center" }}>
            {this.props.navigation.state.routeName} aqui trosha
          </Text>
        </Content>
      </Container>
    );
  }
}

class Settings extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Text>{this.props.navigation.state.routeName}</Text>
          </Body>
        </Header>

        <Content>
          <Text style={{ textAlign: "center" }}>
            {this.props.navigation.state.routeName} aqui trosha
          </Text>
        </Content>
      </Container>
    );
  }
}

class Profile extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Text>{this.props.navigation.state.routeName}</Text>
          </Body>
        </Header>

        <Content>
          <Text style={{ textAlign: "center" }}>
            {this.props.navigation.state.routeName} aqui trosha
          </Text>
        </Content>
      </Container>
    );
  }
}

// const DashboardTabNavigator = createBottomTabNavigator(
//   {
//     Feed,
//     Profile,
//     Settings
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state.routes[navigation.state.index];
//       return {
//         headerTitle: routeName
//       };
//     }
//   }
// );
// const DashboardStackNavigator = createStackNavigator(
//   {
//     DashboardTabNavigator: DashboardTabNavigator
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => {
//       return {
//         headerLeft: (
//           <Icon
//             style={{ paddingLeft: 10 }}
//             onPress={() => navigation.openDrawer()}
//             name="menu"
//             size={30}
//           />
//         )
//       };
//     }
//   }
// );

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Feed
  },
  Settings: {
    screen: Settings
  },
  Profile: {
    screen: Profile
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  CadastroPage: { screen: CadastroPage },
  Dashboard: { screen: AppDrawerNavigator }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

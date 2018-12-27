import { createStackNavigator } from "react-navigation";
import React from "react";
import { View, TouchableHighlight, Text } from "react-native";

import DrawerScreen from "./drawerScreen";

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: { screen: DrawerScreen }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "rgb(255,45,85)",
        paddingLeft: 10,
        paddingRight: 10
      },
      title: "Home",
      headerTintColor: "white",
      headerLeft: (
        <View>
          <TouchableHighlight
            onPress={() => {
              if (navigation.state.index === 0) {
                navigation.navigate("DrawerOpen");
              } else {
                navigation.navigate("DrawerClose");
              }
            }}
          >
            <Text>Menu</Text>
          </TouchableHighlight>
        </View>
      )
    })
  }
);

export default DrawerNavigation;

import React, { Component } from "react";
import { Text, View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0
    };
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "80%",
          marginHorizontal: "10%"
        }}
      >
        <SegmentedControlTab
          values={["Masculino", "Feminino"]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          activeTabStyle={{ backgroundColor: "#224e8a" }}
        />
      </View>
    );
  }
}

import React, { Component } from "react";
import { Text, View } from "react-native";
import { CheckBox } from "react-native-elements";

export class Wizard extends Component {
  state = {
    checked: false
  };

  _pressCheck = () => {
    this.setState({
      checked: !checked
    });
  };

  render() {
    return (
      <View>
        <Text> Testando butao </Text>
        <CheckBox
          title="Click Here"
          checked={this.state.checked}
          onIconPress={this._pressCheck}
        />
      </View>
    );
  }
}

export default Wizard;

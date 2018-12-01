import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Provider as PaperProvider,
  Text,
  TextInput,
  Title,
  Subheading,
  Modal,
  Portal,
  Button
} from "react-native-paper";
import TextInputMask from "react-native-text-input-mask";

export default class App extends Component {
  state = {
    email: "",
    visible: false
  };

  _showModal = () => this.setState({ visible: true });
  _hideModal = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <PaperProvider>
        <View style={styles.container}>
          <Title style={{ textAlign: "center" }}>Titulo aqui</Title>
          <Subheading style={{ textAlign: "center" }}>
            Subheading aqui
          </Subheading>

          <Text style={{ textAlign: "center" }}>Teste</Text>

          <TextInput
            mode="flat"
            label="Phone number"
            placeholder="E.g +55 99 9 9999-9999"
            value={this.state.telefone}
            render={props => (
              <TextInputMask {...props} mask="+55 [00] [0] [0000]-[0000]" />
            )}
          />

          <Button onPress={this._showModal} mode="outlined">
            {" "}
            Show Modal
          </Button>

          <Portal>
            <Modal visible={visible} onDismiss={this._hideModal}>
              <View
                style={{
                  height: 300,
                  width: 300,
                  backgroundColor: "#000",
                  alignItems: "center"
                }}
              >
                <Text style={{ textAlign: "center" }}>Example Modal</Text>
              </View>
            </Modal>
          </Portal>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

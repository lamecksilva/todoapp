import React, { Component } from "react";
import { Platform, StyleSheet, View } from "react-native";
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Body,
  Icon,
  Button,
  Drawer
} from "native-base";
import SideBar from "./Menu";

export default class App extends Component {
  variavel = 0;
  closeDrawer = () => {
    this._drawer._root.close();
  };

  openDrawer = () => {
    this._drawer._root.open();
    this.variavel = this.variavel + 1;
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => this.openDrawer}>
                <Icon name="menu" />
              </Button>
            </Left>

            <Body>
              <Text>Menuzao do lamecao</Text>
            </Body>
          </Header>
          <Content>
            <Text>Lamecao na voz{this.variavel}</Text>
          </Content>
        </Container>
      </Drawer>
    );
  }
}

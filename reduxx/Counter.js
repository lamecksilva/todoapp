import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

const Counter = props => (
  <Text>Você tem {props.todos.length} todos armazenados</Text>
);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Counter);

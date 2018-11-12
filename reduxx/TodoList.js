import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import * as todoActions from "./actions/todos";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  state = {
    newTodoText: ""
  };

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);

    this.setState({ newTodoText: "" });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>List App com Redux rolando ai</Text>

        {this.props.todos.map(todo => (
          <Text style={styles.itemList} key={todo.id}>
            {todo.text}
          </Text>
        ))}

        <TextInput
          style={styles.TextInput}
          onChangeText={text =>
            this.setState({
              newTodoText: text
            })
          }
          value={this.state.newTodoText}
        />
        <Button onPress={this.addNewTodo} title="Novo Todo" color="#7167E8" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    padding: 10,
    fontSize: 40
  },
  itemList: {
    padding: 10,
    fontSize: 25
  },
  TextInput: {
    borderRadius: 40,
    backgroundColor: "white",
    marginTop: "2%",
    marginBottom: "2%"
  }
});

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

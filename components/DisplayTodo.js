import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions";
import { Ionicons } from "@expo/vector-icons";

const DisplayTodo = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <View
      style={{
        width: "80%",
        // borderWidth: 3,
      }}
    >
      {todos.map((todo) => (
        <View
          key={todo.id}
          style={{
            flexDirection: "row",
            borderWidth: 1,
            justifyContent: "space-between",
            height: 55,
            alignItems: "center",
            paddingLeft: 15,
            backgroundColor: "#e69aa3",
            borderColor: "#dadada",
            marginBottom: 10,
            borderRadius: 10,
            // width: "100%",
          }}
        >
          <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
            <ScrollView>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    textDecorationLine: todo.completed
                      ? "line-through"
                      : "none",
                    textAlign: "center",
                    color: "#855858",
                    fontWeight: "500",
                    width: 350,
                    // borderWidth: 3,
                    marginTop: 10,
                  }}
                >
                  {todo.text}
                </Text>
              </View>
            </ScrollView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
            {console.log(" indside delete", todo.id)}
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 4,
              }}
            >
              <Ionicons name="trash-bin" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleTodo: (id) => dispatch({ type: "TOGGLE_TODO", id }),
    toggleTodo: (id) => dispatch(toggleTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);

const styles = StyleSheet.create({
  textUI: {
    justifyContent: "center",
    // borderWidth: 2,
    // width: "100%",
    // alignItems: "center",
  },
});

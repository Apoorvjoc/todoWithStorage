import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import DisplayTodo from "./DisplayTodo";

import { addTodo, removeAll } from "../redux/actions";

const TodoApp = (props) => {
  const [text, setText] = useState("");

  const handleText = (inputedText) => {
    setText(inputedText);
  };

  return (
    <View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          marginLeft: 35,
        }}
      >
        <TextInput
          placeholder="Enter todo here!"
          value={text}
          onChangeText={handleText}
          style={{
            backgroundColor: "#dadada",
            height: 60,
            textAlign: "center",
            marginVertical: 40,
            padding: 5,
            width: "85%",
            marginLeft: -15,
            fontSize: 20,
            color: "#b87474",
          }}
        />

        <TouchableOpacity
          onPress={() => {
            props.addTodo(text), setText("");
          }}
        >
          <View
            style={{
              height: 60,
              backgroundColor: "#dadada",
              marginVertical: 40,
              justifyContent: "center",
              padding: 2,
            }}
          >
            <MaterialIcons name="add-box" size={45} color="#e69aa3" />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <DisplayTodo />
      </View>
      {/*<View style={styles.clearAll}>
        <TouchableOpacity onPress={props.removeAll}>
          <View>
            <Text>Clear all</Text>
          </View>
        </TouchableOpacity>
        </View>*/}
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    // addTodo: (text) => dispatch({ type: "ADD_TODO", text }),
    addTodo: (text) => dispatch(addTodo(text)),
    removeAll: () => dispatch(removeAll()),
  };
}

export default connect(null, mapDispatchToProps)(TodoApp);

const styles = StyleSheet.create({
  clearAll: {
    position: "absolute",
    right: 0,
    top: 10,
    backgroundColor: "white",
    padding: 4,
    borderRadius: 10,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import store from "./redux/store";
import { connect, Provider } from "react-redux";

import TodoApp from "./components/TodoApp";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./components/Header";
import { removeAll } from "./redux/actions";
import ClearAll from "./components/ClearAll";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <View style={styles.container}>
        <LinearGradient
          colors={["#dd5e89", "#f7bb97"]}
          style={styles.background}
        />
        <TodoApp />
      </View>
      <ClearAll />
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    // borderWidth: 3,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1000,
  },
});

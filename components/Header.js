import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 36, fontWeight: "bold" }}>
        TODO APP
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#d55e89",
    height: 85,
    alignItems: "center",
    justifyContent: "center",
  },
});

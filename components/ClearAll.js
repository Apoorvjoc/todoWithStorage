import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { removeAll } from "../redux/actions";

const ClearAll = (props) => {
  return (
    <View style={styles.clearAll}>
      <TouchableOpacity onPress={props.removeAll}>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "#947676",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Clear all
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    removeAll: () => dispatch(removeAll()),
  };
}

export default connect(null, mapDispatchToProps)(ClearAll);

const styles = StyleSheet.create({
  clearAll: {
    backgroundColor: "white",
    padding: 10,
    width: "20%",
    // alignItems: "flex-end",
    borderRadius: 10,
    textAlign: "center",
    marginBottom: 10,
    marginLeft: 320,
    backgroundColor: "pink",
  },
});

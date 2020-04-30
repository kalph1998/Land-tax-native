import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NumberContainer = props => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 150,
    borderColor: "#de6b35"
  },
  Number: {
    fontSize: 20
  }
});

export default NumberContainer;

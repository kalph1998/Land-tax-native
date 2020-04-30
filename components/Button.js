import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Buttonbg = (props) => {
  const content = (
    <View style={{ ...styles.button, ...props.style }}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    width: 100,
    alignItems: "center",
    borderRadius: 35,
    overflow: "hidden",
    backgroundColor: "#de6b35",
    marginLeft: 20,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});

export default Buttonbg;

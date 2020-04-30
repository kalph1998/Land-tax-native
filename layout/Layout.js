import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground
} from "react-native";
import Selector from "../Screens/Picker";

const Layout = () => {
  return (
    <View style={styles.container}>
      <Selector />
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

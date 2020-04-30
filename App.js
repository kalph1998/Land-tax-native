import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./components/Header";
import Selector from "./Screens/Picker";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Rajasthan Land Tax Calculator" />
      <ScrollView>
        <Selector />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

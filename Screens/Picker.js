import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-community/picker";
import Land from "./Land";
import Header from "../components/Header";

const ClassPicker = props => {
  const [Category, setCategory] = useState("industrial");
  const [minecat, setMineCat] = useState("");

  return (
    <View>
      <View>
        <Header title="Rajasthan Land Tax Calculator" />
      </View>
      <ScrollView>
        <View>
          <View style={styles.Cat}>
            <Text style={{ fontSize: 23 }}> Select Category of Land Type </Text>
            <Picker
              selectedValue={Category}
              style={styles.CatPick}
              onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
              mode="dropdown"
            >
              <Picker.Item label="Industrial" value="industrial" />
              <Picker.Item label="Mining" value="mining" />
              <Picker.Item label="Commercial" value="commercial" />
            </Picker>
          </View>
        </View>
        <View style={styles.MineContainer}>
          <View
            style={
              Category === "mining" ? { display: "flex" } : { display: "none" }
            }
          >
            <Text style={styles.mine}>Select Mining Land</Text>
            <Picker
              selectedValue={minecat}
              style={styles.CatPick}
              onValueChange={(itemValue, itemIndex) => setMineCat(itemValue)}
              mode="dropdown"
              enabled={Category === "mining" ? true : false}
            >
              <Picker.Item label="Select Class" value="" />
              <Picker.Item label="Lead zinc bearing land" value="lead" />
              <Picker.Item label="Copper bearing land" value="copper" />
              <Picker.Item label="Rock phosphatic bearing land" value="rock" />
              <Picker.Item
                label="Cement and sms grade limestone"
                value="cement"
              />
              <Picker.Item
                label="Other major mineral bearing land"
                value="major"
              />
              <Picker.Item
                label="Dolomite,felspar(other than cement and limestone)"
                value="dolomite"
              />
              <Picker.Item
                label="Other minor mineral bearing land"
                value="minor"
              />
            </Picker>
          </View>
        </View>

        <Land Category={Category} minecat={minecat} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Cat: {
    marginTop: 30,
    alignItems: "center"
  },
  CatPick: {
    height: 60,
    width: 300
  },
  mine: {
    fontSize: 23
  },
  MineContainer: {
    alignItems: "center",
    marginTop: 20
  }
});

export default ClassPicker;

import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Input } from "react-native-elements";
import NumberContainer from "../components/NumberContainer";
import Buttton from "../components/Button";

const Land = (props) => {
  const minecat = props.minecat;
  const Category = props.Category;
  const [area, setArea] = useState("");
  const [taxable, setTaxable] = useState(0);
  const [Pay, setPay] = useState(0);

  const inputHandler = (input) => {
    setArea(input.replace(/[^0-9]/g, ""));
  };
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const taxableLand = Math.max(0, area - 10000);

  const tax = numberWithCommas(taxableLand);

  const Payable = (Category, taxableLand, minecat) => {
    if (Category === "industrial") {
      return taxableLand * 2;
    } else if (Category === "commercial") {
      return taxableLand * 3;
    } else if (minecat === "lead") {
      return taxableLand * 15;
    } else if (minecat === "copper") {
      return taxableLand * 15;
    } else if (minecat === "rock") {
      return taxableLand * 210;
    } else if (minecat === "cement") {
      return taxableLand * 6;
    } else if (minecat === "major") {
      return taxableLand * 3;
    } else if (minecat === "dolomite") {
      return taxableLand * 2;
    } else if (minecat === "minor") {
      return taxableLand * 0.2;
    } else if (minecat === "" || Category === "") {
      return 0;
    }
  };

  const payableTax = numberWithCommas(Payable(Category, taxableLand, minecat));

  const CalculateHandler = () => {
    if (area === "") {
      Alert.alert("no value", "Please enter the area of land", [
        { style: "destructive", text: "OK", onPress: clearHandler },
      ]);
    } else if (area < 10000) {
      Alert.alert("Small Land ", "No Tax applicable", [
        { style: "destructive", text: "ok", onPress: clearHandler },
      ]);
    } else {
      setTaxable(tax);
      setPay(payableTax);
    }
  };

  const clearHandler = () => {
    setTaxable(0);
    setPay(0);
    setArea("");
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="sq ft"
          label="Enter Area of Land in sq.ft"
          containerStyle={styles.inputContainerStyle}
          maxLength={7}
          keyboardType="numeric"
          onChangeText={inputHandler}
          value={area}
          labelStyle={{
            color: "black",
            fontSize: 20,
            marginBottom: 20,
            color: "#de6b35",
            textAlign: "center",
          }}
          placeholderTextColor="#de6b35"
          underlineColorAndroid="transparent"
          blurOnSubmit
          inputContainerStyle={styles.input}
          clearButtonMode="always"
        />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Buttton text="calculate" onPress={CalculateHandler} />

          <Buttton text="clear" onPress={clearHandler} />
        </View>
        <Text style={{ fontSize: 20, marginTop: 20 }}>Taxable Land</Text>
        <View>
          <NumberContainer>{taxable} sq.ft </NumberContainer>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, marginTop: 20 }}>Payable Tax</Text>
          <View>
            <NumberContainer>{Pay} ₹ </NumberContainer>
          </View>
        </View>
        <View style={styles.NoteContainer}>
          <Text style={styles.Note}>
            Note : Intrest and Penalty on Payable tax may be applicable as per
            Land Tax rules
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
  },
  inputContainerStyle: {
    width: "70%",
    alignItems: "center",
    paddingLeft: 25,
  },
  Note: {
    textAlign: "center",
    fontSize: 18,
    color: "#8f4426",
  },
  NoteContainer: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});

export default Land;

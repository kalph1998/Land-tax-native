import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Input } from "react-native-elements";
import NumberContainer from "../components/NumberContainer";

const Land = props => {
  const minecat = props.minecat;
  const Category = props.Category;
  const [area, setArea] = useState("");
  const inputHandler = input => {
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

  return (
    <View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="sq ft"
          label="Area of Land"
          containerStyle={styles.inputContainerStyle}
          maxLength={7}
          keyboardType="numeric"
          onChangeText={inputHandler}
          value={area}
          labelStyle={{
            color: "black",
            fontSize: 20,
            marginBottom: 20,
            color: "#de6b35"
          }}
          placeholderTextColor="#de6b35"
          underlineColorAndroid="transparent"
          blurOnSubmit
          inputContainerStyle={styles.input}
        />
        <Text style={{ fontSize: 20, marginTop: 20 }}>Taxable Land(sq.ft)</Text>
        <View>
          <NumberContainer>{tax} ₹</NumberContainer>
        </View>
        <View>
          <Text style={{ fontSize: 20, marginTop: 20, textAlign: "left" }}>
            Payable Tax
          </Text>
          <View>
            <NumberContainer>{payableTax} ₹</NumberContainer>
          </View>
        </View>
        <View style={styles.NoteContainer}>
          <Text style={styles.Note}>
            Note : On Payable tax Intrest and Penalty may be applicable as per
            Land Tax rules
          </Text>
        </View>
        <Text></Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20
  },
  inputContainerStyle: {
    width: "70%",
    alignItems: "center",
    paddingLeft: 25
  },
  Note: {
    textAlign: "center",
    fontSize: 18,
    color: "#8f4426"
  },
  NoteContainer: {
    marginTop: 20
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black"
  }
});

export default Land;

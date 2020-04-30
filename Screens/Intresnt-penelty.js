import React, { useContext, createContext, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import { DateContext } from "./allotmentDate";
import { PaymentContext } from "./PaymentDate";
import { LandContext } from "./Land";

const Inrest = props => {
  const { allotmemtdate, setDate } = useContext(DateContext);
  const { paydate } = useContext(PaymentContext);
  const { payableTax } = useContext(LandContext);
  const [int, setInt] = useState("");

  const numberOfDaysCalc = (allot, pay) => {
    var time = pay.getTime() - allot.getTime();
    var diffrence = time / (1000 * 3600 * 24);
    if (diffrence < 0) {
      return 0;
    } else {
      return diffrence;
    }
  };

  const numberOfDays = numberOfDaysCalc(allotmemtdate, paydate).toFixed();

  const alert = () => {
    return (
      <View>
        <Text>allotment date should be greater than payment date</Text>
      </View>
    );
  };

  const paydates = numofday => {
    if (numofday > 30) {
      return numofday - 30;
    } else if (numofday < 30) {
      return 0;
    }
  };

  const finalpaydate = paydates(numberOfDays) + 1;

  const intrestCalc = (PayableTax, dateSelcetor) => {
    const oneYear = PayableTax * (12 / 100) * 1;
    const totalIntrest = (oneYear / 365) * dateSelcetor;
    return totalIntrest;
  };
  const intrest = intrestCalc(payableTax, finalpaydate).toFixed();

  const IntrestHandler = () => {
    setInt(intrest);
  };

  return (
    <View>
      <Text style={{ textAlign: "center", marginVertical: 20, fontSize: 25 }}>
        {int}
      </Text>
      <Button title="calculate intrest" onPress={IntrestHandler} />
    </View>
  );
};

export default Inrest;

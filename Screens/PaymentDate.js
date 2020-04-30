import React, { useState, createContext } from "react";
import { View, Button, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Intrest from "./Intresnt-penelty";

export const PaymentContext = createContext();

const App = props => {
  const [paydate, setPayDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || paydate;
    setShow(Platform.OS === "ios");
    setPayDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <PaymentContext.Provider value={{ paydate }}>
      <View>
        <View>
          <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={paydate}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20 }}>
            Selected Payment Date: {paydate.toLocaleDateString()}
          </Text>
        </View>
        <Intrest />
      </View>
    </PaymentContext.Provider>
  );
};

export default App;

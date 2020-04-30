import React, { useState, createContext } from "react";
import { View, Button, Platform, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Datepick from "../Screens/PaymentDate";

export const DateContext = createContext();

const App = props => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const initialDate = new Date(1585713180010);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };

  const allotmentDateCalc = (date, initialDate) => {
    if (date <= initialDate) {
      return initialDate;
    } else if (date >= initialDate) return date;
  };

  const allotmemtdate = allotmentDateCalc(date, initialDate);

  return (
    <DateContext.Provider value={{ allotmemtdate, setDate }}>
      <View>
        <View style={{ marginVertical: 20 }}>
          <View>
            <Button onPress={showDatepicker} title="Select Date" />
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Text style={{ textAlign: "center", fontSize: 20, marginTop: 20 }}>
            Selected Allotment Date: {date.toLocaleDateString()}
          </Text>
        </View>
        <Datepick />
      </View>
    </DateContext.Provider>
  );
};

export default App;

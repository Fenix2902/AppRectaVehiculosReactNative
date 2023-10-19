import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper";
import { styles } from "../assets/styles/allstyles";
// import DatePicker from 'react-native-datepicker';
// import NavigationButtons from './NavigationButtons';
import { handleRentCar } from "../database/data"; // Importa la función handleRentCar desde tu archivo data

export function RentVehicle({ cars, users}) {
  const [plateNumber, setPlateNumber] = useState("");
  const [username, setUsername] = useState("");
  const [rentDate, setRentDate] = useState("");
  const [errorMessage, setMessage] = useState("");
  const [rentnumber, setRentnumber] = useState("");
  // const [selectedDate, setSelectedDate] = useState('');

  const handleRent = () => {
    const rentDateParts = rentDate.split("/"); // Suponiendo que el usuario ingrese 'DD/MM/YYYY'
    const day = parseInt(rentDateParts[0], 10);
    const month = parseInt(rentDateParts[1], 10) - 1; // Los meses en JavaScript comienzan en 0 (enero es 0)
    const year = parseInt(rentDateParts[2], 10);

    const rentDateObject = new Date(year, month, day);

    const result = handleRentCar(plateNumber, username, rentDateObject);

    if (result === "Renta exitosa.") {
      setMessage("Renta exitosa");
      setPlateNumber("");
      setUsername("");
      setRentDate("");
      setRentnumber("");
    } else {
      setMessage(result);
    }
    console.log(result)
  };

  return (
    <View style={styles.container}>
      <Avatar.Image
        style={{ marginBottom: 20 }}
        size={100}
        source={require("../assets/imgs/LogoRentaVehiculo.webp")}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          padding: 50,
        }}
      >
        <TextInput
          placeholder="Rent Number"
          value={rentnumber}
          onChangeText={setRentnumber}
        />
        <TextInput
          style={{ marginTop: 20 }}
          placeholder="Platenumber"
          value={plateNumber}
          onChangeText={setPlateNumber}
        />
        <TextInput
          style={{ marginTop: 20 }}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />


        <TextInput
          style={{ marginTop: 20 }}
          placeholder="Rental date (DiaMesAño)"
          value={rentDate}
          onChangeText={setRentDate}
        />

        <Text style={{ color: "red" }}>{errorMessage}</Text>
        <Button
          style={{ marginTop: 20, backgroundColor: "powderblue" }}
          icon="content-save"
          mode="outlined"
          onPress={handleRent}
        >
          Rent Vehicle
        </Button>
      </View>
    </View>
  );
}

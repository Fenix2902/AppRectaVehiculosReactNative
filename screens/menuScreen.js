import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Avatar, Button } from "react-native-paper";
import { styles } from "../assets/styles/allstyles";



export function menuScreen({ navigation }) {
  const handleGotoUsers = ()=>{
    navigation.navigate('Login')
  }
  const handleGotoVehicle = ()=>{
    navigation.navigate('VehicleInformation')
  }
  return (
    <View style={styles.container}>
      <Avatar.Image
        style={{ marginBottom: 20}}
        size={200}
        source={require("../assets/imgs/bienvenidosLogo.png")}
      />
      <View
        style={{
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          padding: 50,
        }}
      >
        <Button
          style={{ marginTop: 20, backgroundColor: "#CCE2F9" }}
          icon="account-group"
          mode="outlined"
          onPress={handleGotoUsers}
        >
          Users
        </Button>
        <Button
          style={{ marginTop: 20, backgroundColor: "#CCE2F9" }}
          icon="car-multiple"
          mode="outlined"
          onPress={handleGotoVehicle}
        >
          Vehicle Information
        </Button>
        {/* <Button
          style={{ marginTop: 20, backgroundColor: "#CCE2F9" }}
          icon="car-key"
          mode="outlined"
          // onPress={handleSignIn}
        >
          Rent Vehicles
        </Button> */}
      </View>
    </View>
  );
}

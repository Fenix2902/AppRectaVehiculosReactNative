import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {menuScreen} from './screens/menuScreen';
import {LoginScreen} from './screens/LoginScreen';
import { UserRegistrationScreen } from './screens/UserRegistrationScreen';
import { VehicleInformationScreen } from './screens/VehicleInformationScreen';
import { RentVehicle } from './screens/RentVehicle';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu'>
        <Stack.Screen name="Menu" component={menuScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Record" component={UserRegistrationScreen} />
        <Stack.Screen name='VehicleInformation' component={VehicleInformationScreen}/>
        <Stack.Screen name='RentVehicle' component={RentVehicle}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



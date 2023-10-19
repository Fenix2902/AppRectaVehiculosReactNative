import React, { useState } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button, Avatar } from 'react-native-paper';
import { styles } from '../assets/styles/allstyles';

export function VehicleInformationScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset, // Agregamos la función reset para reiniciar el formulario
  } = useForm({
    defaultValues: {
      platenumber: '', // Número de placa
      brand: '', // Marca del carro
      state: 'True', // Estado inicial: Disponible
    },
  });

  const [cars, setCars] = useState([]); // Almacenar la lista de carros
  const [isCarSaved, setIsCarSaved] = useState(false);

  const onSubmit = (data) => {
    // Agregar el nuevo carro a la lista de carros
    setCars((prevCars) => [...prevCars, data]);
    // Restablecer los campos del formulario
    reset();
    setIsCarSaved(true);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Avatar.Image
        style={{ marginBottom: 20, marginTop:20 }}
        size={100}
        source={require("../assets/imgs/logoRegistroVehiculo.png")}
      />
        <View
        style={{
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          padding: 50,
        }}
      >
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 6, // Longitud máxima para el número de placa
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Platenumber"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              left={<TextInput.Icon icon={'numeric'}/>}
            />
          )}
          name="platenumber"
        />
        {errors.platenumber?.type === 'required' && (
          <Text style={{ color: 'red' }}>Plate number is required</Text>
        )}
        {errors.platenumber?.type === 'maxLength' && (
          <Text style={{ color: 'red' }}>Maximum length is 6 characters</Text>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 30,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ marginTop: 10 }}
              label="Brand"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              left={<TextInput.Icon icon="form-textbox"/>}
            />
          )}
          name="brand"
        />
        {errors.brand?.type === 'required' && (
          <Text style={{ color: 'red' }}>Car brand is mandatory</Text>
        )}
        {errors.brand?.type === 'maxLength' && (
          <Text style={{ color: 'red' }}>Maximum length is 30 characters</Text>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ marginTop: 10 }}
              label="State"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              left={<TextInput.Icon icon="state-machine" />}
              editable={false} // El estado se establece automáticamente
            />
          )}
          name="state"
        />

        <Button
          style={{ marginTop: 20 }}
          icon="content-save"
          mode="outlined"
          buttonColor="lightblue"
          textColor='black'
          onPress={handleSubmit(onSubmit)}
        >
          Add Vehicle
        </Button>

        {isCarSaved && (
          <Text style={{ fontSize: 24, marginTop: 20, color: 'blue' }}>
            List Of Vehicles
          </Text>
        )}
 
        <FlatList
          data={cars}
          keyExtractor={(car, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ borderBottomWidth: 1, borderColor: 'gray', padding: 10 }}>
              <Text style={{color:'black', fontSize:18}}>Platenumber: {item.platenumber}</Text>
              <Text style={{color:'black', fontSize:18}}>Brand: {item.brand}</Text>
              <Text style={{color:'black', fontSize:18}}>State: {item.state}</Text>
            </View>
          )}
        />
      </View>
      </View>
  );
}
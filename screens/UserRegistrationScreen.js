import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Button, Avatar } from "react-native-paper";
import { useState } from "react";

export function UserRegistrationScreen({ navigation, route }) {
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState(true)
  const [showPass, setShowPass] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      name: "",
      password: "",
    },
  });
  // const onSubmit = (data) => console.log(data);
  const onSubmit = (data)=>{
    setMessage('Registro exitoso...')
    console.log(data)
    reset()
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Avatar.Image
        style={{ marginBottom: 20 }}
        size={100}
        source={require("../assets/imgs/LogoRegistroUser.png")}
      />

      <View
        style={{
          borderWidth: 2,
          borderColor: "gray",
          borderRadius: 10,
          padding: 50,
        }}
      >
        {/* controlador fullName */}
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 30,
            minLength: 3,
            pattern: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ marginTop: 10 }}
              label="Full Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name?.type == "required" && (
          <Text style={{ color: "red" }}>Name is required</Text>
        )}
        {errors.name?.type == "maxLength" && (
          <Text style={{ color: "red" }}>
            Length must be up to 30 characters
          </Text>
        )}
        {errors.name?.type == "minLength" && (
          <Text style={{ color: "red" }}>
            The minimum length is 10 characters.
          </Text>
        )}
        {errors.name?.type == "pattern" && (
          <Text style={{ color: "red" }}>
            You must enter only letters and/or spaces
          </Text>
        )}

        {/* controlador Username */}
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 10,
            minLength: 5,
            pattern: /^[0-9a-zA-Z]+$/, // Acepta letras y números
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ marginTop: 10 }}
              label="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username?.type == "required" && (
          <Text style={{ color: "red" }}>Username is required</Text>
        )}
        {errors.username?.type == "maxLength" && (
          <Text style={{ color: "red" }}>
            Length must be up to 10 characters
          </Text>
        )}
        {errors.username?.type == "minLength" && (
          <Text style={{ color: "red" }}>
            The minimum length is 5 characters.
          </Text>
        )}
        {errors.username?.type == "pattern" && (
          <Text style={{ color: "red" }}>
            You must enter only letters and numbers
          </Text>
        )}

        {/* controlador de password */}
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 13,
            minLength: 6,
            pattern:
              /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{6,}/,
          }} //contraseña fuerte de 6 caracteres y letra mayuscula y minuscula y caracter especial
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={{ marginTop: 10 }}
              label="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              right={
                <TextInput.Icon
                  icon={showPass ? "eye" : "eye-off"}
                  onPress={() => setShowPass(!showPass)}
                />
              }
              secureTextEntry={!showPass}
            />
          )}
          name="password"
        />
        {errors.password?.type == "required" && (
          <Text style={{ color: "red" }}>Password is required</Text>
        )}
        {errors.password?.type == "maxLength" && (
          <Text style={{ color: "red" }}>
            Length must be up to 13 characters
          </Text>
        )}
        {errors.password?.type == "minLength" && (
          <Text style={{ color: "red" }}>
            The minimum length is 6 characters.
          </Text>
        )}
        {errors.password?.type == "pattern" && (
          <Text style={{ color: "red" }}>
            You must enter only letters and numbers and characters specials
          </Text>
        )}

        <Button
          style={{ marginTop: 20, backgroundColor: "powderblue" }}
          icon="content-save"
          mode="outlined"
          onPress={handleSubmit(onSubmit)}
        >
          Save
        </Button>
        <Text style={{marginTop: 5,color: messageColor ? 'green' : 'red'}}>{message}</Text>
        {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
      </View>
    </View>
  );
}

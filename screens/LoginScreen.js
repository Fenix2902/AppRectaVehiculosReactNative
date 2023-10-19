import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, Avatar, Button} from "react-native-paper";
import { styles } from "../assets/styles/allstyles";
import { data } from "../database/data";


export function LoginScreen({navigation}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const [showPass, setShowPass] = useState(false)
    const [messageColor, setMessageColor] = useState(true)
    //definir constantes para la autenticacion
    
    //Metodos para crear cuenta en firebase Authentication y SignIn
    const handleSignIn = ()=>{
      if (data) {
        const userData = data.find(
          (item) => item.user && item.user.username === username && item.user.password === password
        );
    
        if (userData) {
          setMessageColor(true);
          navigation.navigate('RentVehicle')
          // setMessage("Inicio de sesión exitoso ...");
          // Restablecer los campos en blanco
          setUsername('');
          setPassword('');
          //  realizar acciones adicionales aquí si es necesario
          // Por ejemplo, guardar información de usuario en el estado global
        } else {
          setMessage("Usuario y/o contraseña incorrectos");
          setMessageColor(false);
        }
      } else {
        setMessage("Error en la base de datos de usuarios");
        setMessageColor(false);
      }
    };
    

    const handleCreateAccount = ()=>{
        navigation.navigate('Record',{username:username})
    }
    return(
        <View style={styles.container}>
            <Avatar.Image
                style={{ marginBottom: 20 }}
                size={100}
                source={require('../assets/imgs/imglogin.png')} />
            <View style={{ borderWidth: 2, borderColor: 'gray', borderRadius: 10, padding: 50 }}>
                <TextInput
                    autoFocus
                    label="Username"
                    left={<TextInput.Icon icon="email" />}
                    onChangeText={(username) => setUsername(username)}
                    value={username}
                />
                <TextInput
                    style={{ marginTop: 20 }}
                    label="Password"
                    right={<TextInput.Icon icon={showPass ? "eye" : "eye-off"} onPress={()=>setShowPass(!showPass)} />}
                    secureTextEntry ={!showPass}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
                <Button
                    style={{ marginTop: 20, backgroundColor: '#CCE2F9' }}
                    icon="login"
                    mode="outlined"
                    onPress={handleSignIn}
                >
                    SignIn
                </Button>
                <Button
                    style={{ marginTop: 20, backgroundColor: '#CCE2F9' }}
                    icon="account"
                    mode="outlined"
                    onPress={handleCreateAccount}
                >
                    CreateAccount
                </Button>
                <Text style={{marginTop: 5,color: messageColor ? 'green' : 'red'}}>{message}</Text>
            </View>
        </View>
    )
}
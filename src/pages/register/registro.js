import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
//import axiosInstance from "../utils/axios"

export default function Registro(props) {

  const { navigation } = props;

  const goToInicio = () => {
    navigation.navigate("inicio");
  }

  const [state, setState] = useState({
    names: "",
    lastNames: "",
    email: "",
    password: ""
  })

  const handleChangeText = (text, name) => {
    setState({
      ...state,
      [name]: text
    })
  }

  const onRegister = async () => {
    const sendable = {
      "name": state.names,
      "email": state.email,
      "lastName": state.lastNames,
      "password": state.password
    }
    axiosInstance.post("/v1/user", sendable)
  }

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
  };

  // if (!result.canceled) {
  //   setImage(result.assets[0].uri);
  // }

  return (
    <View style={styles.container}>

      <View style={styles.mainContainer}>
        <AntDesign style={styles.icono} name="arrowleft" size={30} color="black" />
        <Text style={styles.title}>
          Registrate para una {'\n'}nueva cuenta</Text>
        <Text style={styles.text}>Proporcionanos tu información.</Text>

      </View>
      <View style={styles.centerText}>
        <TextInput
          style={styles.inputText}
          placeholder="Nombre"
          value={state.names}
          onChangeText={(text) => handleChangeText(text, "names")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Correo electronico"
          value={state.email}
          onChangeText={(text) => handleChangeText(text, "emails")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Contraseña"
          value={state.password}
          onChangeText={(text) => handleChangeText(text, "password")}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Apellidos"
          value={state.lastNames}
          onChangeText={(text) => handleChangeText(text, "lastNames")}
        />
        <View style={styles.centerText}>
          <TouchableOpacity style={styles.personalizarButton} onPress={onRegister}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={pickImage} style={styles.button}>
            <Text style={styles.textButtonImage}>
              Clic Aquí para seleccionar una imagen
            </Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={{ width: 120, height: 120 }} />}
        </View>
        <View style={styles.center}>
          <Text style={{ alignItems: "center" }} >
            Tienes una cuenta?
          </Text>
          <TouchableOpacity onPress={goToInicio}>
            <Text style={styles.textIniciarSesion} > Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingTop: 60,
    position: "relative",
  },
  title: {
    position: "relative",
    color: "#000",
    fontWeight: "bold",
    fontSize: 28,
    paddingLeft: 28,
  },
  text: {
    paddingTop: 15,
    paddingLeft: 28,
  },
  icono: {
    paddingLeft: 16,
    paddingBottom: 20,
  },
  inputText: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginTop: 25,
    marginBottom: 0,
  },
  personalizarButton: {
    backgroundColor: "#238704",
    width: 300,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  textButton: {
    color: "#efffe5",
    fontSize: 20,
  },
  textIniciarSesion: {
    fontSize: 16,
    paddingRight: 15,
    color: "#00BFFF",
  },
  'harlequin': {
    '50': '#efffe5',
    '100': '#dbffc6',
    '200': '#b8ff93',
    '300': '#89ff55',
    '400': '#60f823',
    '500': '#3bd303',
    '600': '#2cb300',
    '700': '#238704',
    '800': '#206a0a',
    '900': '#1d5a0d',
    '950': '#0a3201',
  },
  button: {
    backgroundColor: "#238704",
    borderRadius: 40,
    width: "auto",
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 25,
    marginTop: 10,
  },
  textButtonImage: {
    color: "#efffe5",
    fontSize: 16,
  },
  center: {
    flexDirection: "row",
  }
});
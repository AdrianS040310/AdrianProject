import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useFonts } from 'expo-font';
import axios from 'axios';

export default function Inicio(props) {
  const [fontsLoaded] = useFonts({
    'DelaGothicOne-Regular': require('../../../assets/fonts/DelaGothicOne-Regular.ttf'),
  });

  const { navigation } = props;

  const [state, setState] = useState({
    email: "",
    passowrd: ""
  })

  const onLogin = async () => {
    const { email, password } = state;
    const body = {
      email,
      password
    }
    try {
      const response = await axios.post("https://192.168.0.31:9000/users/login", data);
      console.log(response.data.token);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const goToRegistro = () => {
    navigation.navigate("registro");
  }

  onHandleChange = (value, name) => {
    setState({
      ...state,
      [name]: value
    })
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('../../../img/img-fondo.jpg')}></Image>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Whatsapp</Text>
      </View>

      <View style={styles.mainContainer}>

        <View style={styles.centerText}>
          <TextInput
            style={styles.inputText}
            placeholder="Correo electronico"
            value={state.email}
            onChangeText={(text) => onHandleChange(text, "email")}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Contraseña"
            value={state.passowrd}
            onChangeText={(text) => onHandleChange(text, "password")}
          />
        </View>

        <View style={styles.TextRight}>
          <Text style={styles.textOlvContraseña}>Olvidaste tu contraseña?</Text>
        </View>

        <View style={styles.centerText}>
          <TouchableOpacity style={styles.personalizarButton} onPress={onLogin}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separacion}>
          <Text>
            No tienes cuenta?
          </Text>
          <TouchableOpacity onPress={goToRegistro}>
            <Text style={styles.textRegister}> Registrate</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TextRight: {
    width: "100%",
    height: 60,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  Image: {
    width: "100%",
    height: 310,
    position: "absolute",
  },
  titleContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    paddingTop: 140,
    position: "absolute",
  },
  title: {
    position: "relative",
    color: "#fff",
    fontSize: 50,
    fontFamily: "DelaGothicOne-Regular",
  },
  mainContainer: {
    backgroundColor: '#fffeaa',
    marginTop: 275,
    width: "100%",
    height: "65%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    display: "flex",
    paddingTop: 25,
  },

  endContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  inputText: {
    width: 300,
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    marginTop: 18,
    marginBottom: 0,
  },

  personalizarButton: {
    backgroundColor: "green",
    width: "80%",
    height: 70,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
  },
  textOlvContraseña: {
    fontSize: 16,
    paddingRight: 40,
  },
  textRegister: {
    fontSize: 16,
    paddingRight: 15,
    color: "#00BFFF",
  },
  separacion: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 190,
  }
});
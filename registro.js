import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Registro() {
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
        />
        <TextInput
          style={styles.inputText}
          placeholder="Correo electronico"
        />
        <TextInput
          style={styles.inputText}
          placeholder="Contraseña"
        />
        <TextInput
          style={styles.inputText}
          placeholder="Confirmar contraseña"
        />
        <View style={styles.centerText}>
          <TouchableOpacity style={styles.personalizarButton}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separacion}>
          <Text>
            Tienes una cuenta?
            <Text style={styles.textIniciarSesion}> Inicia sesión</Text>
          </Text>
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
    backgroundColor: "green",
    width: 300,
    height: 70,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
  },
  textIniciarSesion: {
    fontSize: 16,
    paddingRight: 15,
    color: "#00BFFF",
  },
  separacion: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  }
});
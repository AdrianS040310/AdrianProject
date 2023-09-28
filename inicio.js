import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Inicio(props) {

  const { navigation } = props;

  const goToRegistro = () => {
    navigation.navigate("registro");
  }
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('./img/img-fondo.jpg')}></Image>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Whatsapp</Text>
      </View>

      <View style={styles.mainContainer}>

        <View style={styles.centerText}>
          <TextInput
            style={styles.inputText}
            placeholder="Correo electronico"
          />
          <TextInput
            style={styles.inputText}
            placeholder="Contraseña"
          />
        </View>

        <View style={styles.TextRight}>
          <Text style={styles.textOlvContraseña}>Olvidaste tu contraseña?</Text>
        </View>

        <View style={styles.centerText}>
          <TouchableOpacity style={styles.personalizarButton}>
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
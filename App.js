import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registro from "./registro"
import Inicio from './inicio';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="registro" options={{ headerShown: false }} component={Registro} />
        <Stack.Screen name="inicio" options={{ headerShown: false }} component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
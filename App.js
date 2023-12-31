import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registro from './src/pages/register/registro';
import Inicio from './src/pages/login/inicio';
import Chats from './src/pages/chats/chats';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="chats" options={{ headerShown: false }} component={Chats} />
        <Stack.Screen name="registro" options={{ headerShown: false }} component={Registro} />
        <Stack.Screen name="inicio" options={{ headerShown: false }} component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import Prijavi from './screens/Prijavi';
import PrijaviPozar from './screens/PrijaviPozar';
import Pozari from './screens/Pozari';
import USlucajuPozara from './screens/USlucajuPozara';
import KakoSprijeciti from './screens/KakoSprijeciti';
import Info from './screens/Info'

const AppStack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown: false}}>
          <AppStack.Screen name="LoginScreen" component={LoginScreen} />
          <AppStack.Screen name="Prijavi" component={Prijavi} />
          <AppStack.Screen name="PrijaviPozar" component={PrijaviPozar} />
          <AppStack.Screen name="Pozari" component={Pozari} />
          <AppStack.Screen name="KakoSprijeciti" component={KakoSprijeciti} />
          <AppStack.Screen name="USlucajuPozara" component={USlucajuPozara} />
          <AppStack.Screen name="Info" component={Info} />
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

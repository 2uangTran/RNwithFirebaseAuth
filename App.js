import * as React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen  from './src/screens/WelcomeScreen';
import Login from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator inititalRouteName ='WelcomeScreen' screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
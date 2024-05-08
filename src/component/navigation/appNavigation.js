import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../../screens/WelcomeScreen';
import Login from '../../screens/LoginScreen';
import SignUp from '../../screens/SignUpScreen';
import useAuth from '../config/useAuth';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const {user} = useAuth();
  if(user){
    return (
      <NavigationContainer >
        <Stack.Navigator inititalRouteName ='Home' screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }else{
    return (
      <NavigationContainer >
        <Stack.Navigator inititalRouteName ='Welcome' screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
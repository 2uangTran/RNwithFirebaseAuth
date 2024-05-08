import { View,Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style ={MyStyle.ViewStyle}>
      <View style={MyStyle.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={MyStyle.logo}
          resizeMode="contain"
        />
        <Text style={MyStyle.welcomeText}>WELCOME BACK</Text>
      </View>
        <TouchableOpacity style={MyStyle.ButtonLogin} onPress={() => navigation.push('Login')}>
          <Text style={MyStyle.TextStyleLogin}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={MyStyle.ButtonSignUp} onPress={() => navigation.push('SignUp')}>
          <Text style={MyStyle.TextStyleSignUp}>SIGNUP</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Welcome

var MyStyle = StyleSheet.create(
    {
        ViewStyle:{
          flex:1,
          justifyContent:'center',
          // alignContent:'center',
          backgroundColor:"#fff",
        },
        logoContainer: {
          alignItems: 'center',
        },
        TextStyleLogin:{
          color:'white',
          fontSize:20
        },
        TextStyleSignUp:{
          color:'#fb5b5a',
          fontSize:20
        },
        welcomeText:{
          fontWeight:"bold",
          fontSize:30,
          color:"#fb5b5a",
          marginBottom:40,
          textAlign:'center'
        },
        ButtonLogin: {
          borderRadius: 10, 
          backgroundColor: '#fb5b5a',
          marginBottom: 5, 
          top: 20,
          paddingVertical: 20, 
          paddingHorizontal: 25, 
          marginHorizontal: 20,
          borderWidth: 1, 
          borderColor: '#ffffff',
          elevation: 5, 
          alignItems: 'center',
          justifyContent: 'center',
      },
      ButtonSignUp:{
        borderRadius: 10, 
        backgroundColor: '#fff',
        marginBottom: 5, 
        top: 20,
        paddingVertical: 20, 
        paddingHorizontal: 25, 
        marginHorizontal: 20,
        borderWidth: 1, 
        borderColor: '#ffffff',
        elevation: 5, 
        alignItems: 'center',
        justifyContent: 'center',
      }
    }
)
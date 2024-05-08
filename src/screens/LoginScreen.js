import React, {useState} from 'react';
import {
  Alert,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../component/config/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.log('got error: ', err.message);
      }
    }
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logox2.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logo}>LOGIN</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#9BA4B5"
          error={!!email.error}
          errorText={email.error}
          onChangeText={value => setEmail(value)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#9BA4B5"
          onChangeText={value => setPassword(value)}
          value={password}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('SignUp')}>
        <Text style={styles.questions}>Don't have an account? SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
  inputView: {
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 10,
    padding: 2,
    width: '90%',
    elevation: 5,
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  inputText: {
    height: 50,
    color: '#003f5c',
  },
  forgot: {
    color: '#003f5c',
    fontSize: 14,
    marginLeft: '60%',
  },
  loginBtn: {
    width: '90%',
    backgroundColor: '#fb5b5a',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
  },
  questions: {
    color: '#003f5c',
  },
  register: {
    color: 'fb5b5a',
  },
});
export default Login;

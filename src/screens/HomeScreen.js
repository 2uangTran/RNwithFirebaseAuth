import {signOut} from 'firebase/auth';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {auth} from '../component/config/firebase';
export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}> Home Page</Text>
      <TouchableOpacity
        onPress={() => navigation.push('SignUp')}
        style={styles.loginBtn}>
        <Text style={styles.loginText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} style={styles.loginBtn}>
        <Text style={styles.loginText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
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
});

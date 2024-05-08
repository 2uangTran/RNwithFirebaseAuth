import {signOut} from 'firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import {auth} from '../component/config/firebase';
import firestore from '@react-native-firebase/firestore';
import {Appbar, TextInput, Button} from 'react-native-paper';
import Todo from '../component/TODOs/todo';
import {TouchableOpacity, StyleSheet, Text, FlatList, View} from 'react-native';
import React, {useState} from 'react';
export default function TodoScreen() {
  const handleLogout = async () => {
    await signOut(auth);
  };
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const ref = firestore().collection('todos');
  async function addTodo() {
    console.log('Adding todo...');
    await ref.add({
      title: todo,
      complete: false,
    });
    setTodo('');
  }
  React.useEffect(() => {
    const unsubscribe = ref.onSnapshot(querySnapshot => {
      if (querySnapshot) {
        const list = [];
        querySnapshot.forEach(doc => {
          const {title, complete} = doc.data();
          list.push({
            id: doc.id,
            title,
            complete,
          });
        });

        setTodos(list);

        if (loading) {
          setLoading(false);
        }
      }
    });

    return () => unsubscribe();
  }, []);
  if (loading) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> TODOs List</Text>
      <TextInput
        style={styles.input}
        label={'New Todo'}
        value={todo}
        onChangeText={text => setTodo(text)}></TextInput>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Todo {...item} />}></FlatList>

      <TouchableOpacity style={styles.addButton} onPress={addTodo}>
        <Text style={styles.addButtonText}>Add Todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout} style={styles.loginBtn}>
        <Text style={styles.loginText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#fb5b5a',
  },
  input: {
    borderWidth: 3,
    borderColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#fb5b5a',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 18,
  },
  itemList: {
    fontSize: 19,
  },
  taskButtons: {
    flexDirection: 'row',
  },
  editButton: {
    marginRight: 10,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import Button from './components/Button';

export default function App() {
	const [data, setData] = useState([])
	const [loading, setloading] = useState(true)
	const url = "https://jsonplaceholder.typicode.com/posts";
	useEffect(()=>{
		fetch(url)
		.then((response)=>response.json())
		.then((json)=>setData(json))
		.catch((error)=>console.error(error))
		.finally(()=>setloading(false));
	},[]);
  return (
	  <>

    <View style={styles.container}>
      <StatusBar style="auto" />
	  <Text style={styles.titulo}>CONFI</Text>
	  <Text style={styles.subTitle}>Iniciar sesión</Text>
	  <TextInput 
	  placeholder="introduce@email.com"
	  style={styles.textInput}
	  />
	  <TextInput
	  placeholder="Introduce tu contraseña"
	  style={styles.textInput}
	  secureTextEntry={true}
	  />
	  <Text >¿Olvidaste tu contraseña?</Text>
	  <Button></Button>
	  <Text>¿No tienes cuenta?</Text>
	  <AntDesign name="qrcode" size={150} color="black" />
    </View>
	</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
	  fontSize: 80,
	  color: 'black',
	  fontWeight:'bold',
  },
  subTitle:{
	  fontSize: 20,
	  color: 'grey',
  },
  textInput:{
	padding: 10,
	paddingStart: 20,
	width: '80%',
	height: 50,
	marginTop: 20,
	borderRadius: 30,
	backgroundColor: 'white',
  }
});



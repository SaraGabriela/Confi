import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
const link = "https://confi-chat.vercel.app/";

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
		<AntDesign name="github" size={150} color="pink" />

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

	  <Button

        title="Contact with Confi"
        onPress={() =>  Linking.openURL(link)}
      />
    </View>
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
	backgroundColor: 'yellow',
	marginBottom: 20,
  },
  Button: {
	padding: 20,

  }
  
});



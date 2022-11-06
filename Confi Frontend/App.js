import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Linking, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
const link = "https://confi-chat.vercel.app/";
import logo from './img/logo_final.PNG';

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


    <View style={styles.container}>
      <StatusBar style="auto" />

		<Image source={logo} style={{ width: 305, height: 159 }} />


	
		<TouchableOpacity
        style={styles.button}
        onPress={() =>  Linking.openURL(link)}
      >
        <Text style={styles.buttonTxt}>Contact with Confi</Text>
		
      </TouchableOpacity>
	  <AntDesign name="qrcode" size={200} color="white" />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
  button: {
	padding: 20,
	backgroundColor: '#E0F890',
	
	marginTop: 20,
	cornerRadius: 10,

  },
  buttonTxt:{
	fontWeight:'bold',
	color: '#000',
  }
  
});



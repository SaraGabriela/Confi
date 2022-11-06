import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';import { LinearGradient } from 'expo-linear-gradient';


export default function Buttonnn () {
  return (
	<View style={styles.container}>
      <TouchableOpacity style={styles.text}>
		
		<Text style={styles.text}>SING IN</Text>
      </TouchableOpacity>
	  </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		width: 200,
		marginTop: 60,
	},
	text:{
		fontsize: 14,
		color: '#fff',
		fontWeight: 'bold',
	},
	button:{
		width: '80%',
		height: 50,
		borderRadius: 25,
		padding: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
  });
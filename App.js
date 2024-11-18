import React, { useState } from 'react';
import {  Text, View, Image, StyleSheet, ScrollView, TextInput, Pressable, Alert } from 'react-native';
import { demoData } from './assets/data/data';


const image = require('./assets/Icon.png.jpg')

export default function App() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };
  return (
    <View style={style.container}>
     <Text style={style.parentText}>Sign Up</Text>
     <View style={style.parentInput}>
      <Text style={style.nametext}>Name</Text>
      <TextInput
       placeholder='John Dave' 
       value={text}
       onChangeText={setText}
       style={style.inpuStyle}
      />
     </View>
     <View style={style.parentInput}>
      <Text style={style.nametext}>E-mail</Text>
      <TextInput
       placeholder='example@gmail.com' 
       value={email}
       onChangeText={setEmail}
       style={style.inpuStyle}
      />
     </View>
     <View style={style.parentInput}>
      <Text style={style.nametext}>Password</Text>
      <TextInput
       placeholder='password' 
       value={password}
       secureTextEntry={true}
       onChangeText={setPassword}
       style={style.inpuStyle}
      />
     </View>
     <View style={style.terms}>
      <Text style={style.wordStyle}>
        <Text>I agree with the </Text>
        <Text style={style.innerStyle}>terms & Privacy</Text>
        </Text>
     </View>
     <View style={style.buttonContainer}>
      <Pressable onPress={handlePress} style={style.button}>
      <Text style={style.pressText}>Sign Up</Text>
     </Pressable>
     </View>
    </View>
  );
};

//space-between

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center'
  gap: 30
  },
  parentText: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },

  //text input 
  parentInput: {
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 50,
    gap: 10
  },
  nametext: {
    color: 'blue',
    fontSize: 15,
    fontWeight: '500'
  },
  inpuStyle: {
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 20,
    borderColor: '#000',
    borderStyle: 'solid',
    backgroundColor: '#ddd'
  },

  //terms and condition
  terms: {
    paddingHorizontal: 50,
  },
  wordStyle: {
    color: 'blue',
    fontSize: 15,
    fontFamily: 'Arial'
  },
  innerStyle:{
    fontWeight: 'bold'
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    borderRadius: 10
  },
  pressText: {
     color: '#fff',
     fontWeight: 'bold',
     padding: 8
  }
})
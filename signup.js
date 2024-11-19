import React, { useState } from 'react';
import {  Text, View, Image, StyleSheet, ScrollView, TextInput, Pressable, Alert } from 'react-native';
import { demoData } from './assets/data/data';



const image = require('./assets/Icon.png.jpg')

export default function App() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const arrowLeft =  require('./assets/icon.png');

  const handlePress = () => {
    console.log('submitted');
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={arrowLeft} style={{height: 20, width: 20}} />
        <Text style={style.parentText}>Sign Up</Text>
      </View>
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

     <View style={{alignItems: 'center', justifyContent: 'center'}}>
     <Pressable onPress={handlePress} 
      style={style.button}
      >
      <Text style={style.pressText}>Sign Up</Text>
     </Pressable>
     </View>
    
      
     <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10}}>
      <View style={{height: 2, width: 90, backgroundColor: '#ddd'}}></View>
      <View>
        <Text style={{color: '#273991'}}>Or sign up with</Text>
      </View>
      <View style={{height: 2, width: 90, backgroundColor: '#ddd', gap: 8}}></View>
     </View>
     <View style={style.google}>
      <Image source={{
        uri: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-white-icon.png"
      }}
      style={style.imageStyle}
      />
     </View>
     <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#273991'}}>Already have an account?</Text>
        <Text style={{fontSize: 17, fontWeight: '450', color: '#273991'}}> Sign in</Text>
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
  gap: 20
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 50,
    paddingVertical: 20,
    alignItems: 'center',
    gap: 15
  },
  parentText: {
    color: '#273991',
    fontSize: 20,
    fontWeight: 'bold',
  },

  //text input 
  parentInput: {
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 50,
    gap: 10
  },
  nametext: {
    color: '#273991',
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  wordStyle: {
    color: '#273991',
    fontSize: 15,
    fontFamily: 'Arial'
  },
  innerStyle:{
    fontWeight: 'bold'
  },
  parentButton: {
    
  },
  button: {
    backgroundColor: '#273991',
    paddingVertical: 5,
    borderRadius: 10,
    // marginHorizontal: 'auto'
  },
  pressText: {
     color: '#fff',
     fontWeight: '#273991',
     padding: 8,
     width: 300,
     textAlign: 'center'
  },
  google: {
    backgroundColor: '#404040',
    paddingVertical: 15,
    width: 120, 
    alignItems: 'center',
    borderRadius: 15,
    marginLeft: 135
  },
  imageStyle: {
    height: 20, 
    width: 20
  }
})
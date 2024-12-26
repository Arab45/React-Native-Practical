import React, { useState } from 'react';
import {  Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import pageImage from './assets/pageImage.png'


// const cb = () => {
//   console.log('sign up!')
// };


export default function Home() {
  const navigation = useNavigation()
  

  return (
    <View style={style.header}>
      <View style={style.imageHeader}>
      <Image source={pageImage} style={style.image}/>
      </View>
      <View style={style.parentContainer}>
        <Text style={style.firstText}>You'll Find</Text>
        <View style={style.unique}>
        <Text style={style.secondText}>All you need</Text>
        <View style={style.horizontal}></View>
        </View>
        <Text style={style.thirdText}>Here!</Text>
      </View>
        <Pressable onPress={() => navigation.navigate('SignUp')} style={style.button}>
          <Text style={style.text}>Sign Up</Text>
        </Pressable>
      <Text style={{color: '#4F63AC', fontWeight: 'bold', fontSize: 16}}>Sign In</Text> 
    </View>
  );
};

//space-between

const style = StyleSheet.create({
header: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  gap: 32,
  paddingHorizontal: 64
  // justifyContent: 'center'
},
imageHeader: {
  paddingTop: 100,
},
image: {
  height: 209,
  width: 357,
},
parentContainer: {
  alignItems: 'center',
  paddingHorizontal: 20
},
firstText: {
  fontSize: 10,
  fontWeight: 'bold',
  fontSize: 25,
  color: '#303030'
},
secondText:{
color: "#FCA34D",
fontSize: 30,
fontWeight: 500
},
horizontal: {
  height: 2,
  width: 167,
  backgroundColor: "#FCA34D"
},
thirdText: {
  fontSize: 10,
  fontWeight: 'bold',
  color: '#303030',
  fontSize: 25,
}, 
button: {
  backgroundColor: '#4F63AC',
  padding: 12,
  width: 280,
  borderRadius: 8
},
text: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center'
}
});
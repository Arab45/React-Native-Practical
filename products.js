import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView,
  StatusBar,
  Platform,
  useWindowDimensions,
  SafeAreaView
} from "react-native";

import { demoData }  from "./data/data"; 
import { products }  from "./data/product";


const vector = require("./assets/Vector.png");
const group9 = require("./assets/Group 9.png");
const marker = require("./assets/marker 1.png");
const clarity = require("./assets/clarity_home-solid.png");
const bi = require('./assets/bi_person.png');
const chair = require('./assets/Group 2.png');
const table = require('./assets/Group 4.png');
const armchair = require('./assets/Group 6.png');
const bed = require('./assets/Group 8.png');
const lamp = require('./assets/Mask Group.png');
const stand = require('./assets/Mask Group (1).png');
const minimalChair = require('./assets/Mask Group (2).png');
const Desk = require('./assets/Mask Group (3).png');


export default function App() {
  const { width } = useWindowDimensions();

  const boxSize = width / 2;
  return (
    <SafeAreaView style={style.header}>
      <View style={style.container}>
        <View style={style.vectorContainer}>
          <Image source={vector} style={style.vector}/>
          <Text style={style.vectorText}>Find All You Need</Text>
          <Text></Text>
        </View>
        <View style={style.category}>
          <Image source={group9} style={style.starStyle}/>
          <Image source={chair} style={style.starStyle}/>
          <Image source={table} style={style.starStyle}/>
          <Image source={armchair} style={style.starStyle}/>
          <Image source={bed} style={style.starStyle}/>
        </View>

       <FlatList
       data={products}
       keyExtractor={(item, index) => index.toString()}
       renderItem={(item) => {(
        <View key={item}>
          <Text>{}</Text>
        </View>
       )}}
       />

        <View style={style.footerContainer}>
          <Image source={clarity} style={style.clarityStyle}/>
          <Image source={marker}/>
          <Image source={bi} style={style.biStyle}/>
        </View>
      </View>
    </SafeAreaView> 
  );
}



const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    gap: 20,
    borderWidth: 1,
    
  },
  vectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },
  vector: {
  width: 24,
  height: 24
  },
  vectorText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
  ScrollView
} from "react-native";
import { demoData } from "./data/data";
import { products } from "./data/product";

const vector = require("./assets/Vector.png");
const group9 = require("./assets/Group 9.png");
const marker = require("./assets/marker 1.png");
const clarity = require("./assets/clarity_home-solid.png");
const bi = require('./assets/bi_person.png');

export default function App() {
  return (
    <View style={style.header}>
      <View style={style.vectorContainer}>
        <Image source={vector} style={style.vector} />
        <Text style={style.vectotText}>Find All You Need</Text>
        <Text></Text>
      </View>
     
        <View style={style.iconHeader}>
        {demoData.map((item) => (
          <View key={item.id}>
            <View style={{alignItems: 'center'}}>
            <Image source={item.icon} style={{height: 32, width: 32}}/>
            <Text>{item.name}</Text>
            </View>
          </View>
        ))}
        </View>
      <ScrollView>
        <View style={style.productContainer}>
          {products.map((item, i) => (
            <View key={i} style={{ gap: 5, width: 157}}>
              <Image source={item.icon} style={{height: 220, maxWidth: '100%', borderRadius: 10}}/>
              <Text style={{fontSize: 16}}>{item.name}</Text>
              <Text style={{fontWeight: 'bold'}}>{item.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{justifyContent: 'space-evenly', flexDirection: 'row', paddingBottom: 32, paddingTop: 20}}>
        <Image source={clarity} style={{height: 32, width: 32}}/>
        <Image source={marker} style={{height: 32, width: 32}}/>
        <Image source={bi} style={{height: 32, width: 32}}/>
      </View>
    </View>
  );
}



const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    // paddingTop: 18
    gap: 20
  },
  vectorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vector: {
    backgroundColor: "#fff",
    height: 20,
    width: 20
  },
  vectotText: {
    color: "#303030",
    fontWeight: "bold"
  },
  item: {
    flexDirection: "row"
  },
  demoIcon: {
    height: 20,
    width: 20
  },
  iconHeader: {
    // paddingTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productContainer: {
    flex: 1, 
    flexWrap: 'wrap', 
    flexDirection: 'row',
    // borderWidth: 1, 
    // borderColor: 'red', 
    justifyContent: 'space-between',
    gap: 10
  },
});

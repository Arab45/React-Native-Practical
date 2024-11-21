import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import { demoData } from "./data/data";
import { Category } from "./category";
import { ScrollView } from "react-native-web";

const vector = require("./assets/Vector.png");
const group9 = require("./assets/Group 9.png");

export default function App() {
  const dataDemo = [
    {
      id: 1,
      icon: './assets/Group 9.png',
      name: 'Popular'
    },
    {
      id: 2,
      icon: './assets/Group 2.png',
      name: 'Chair'
    },
    {
      id: 3,
      icon: './assets/Group 4.png',
      name: 'Table'
    },
    {
      id: 4,
      icon: './assets/Group 6.png',
      name: 'Armchair'
    },
    {
      id: 5,
      icon: './assets/Group 8.png',
      name: 'Bed'
    }
  ];
  console.log(dataDemo);
  return (
    <View style={style.header}>
      <View style={style.vectorContainer}>
        <Image source={vector} style={style.vector} />
        <Text style={style.vectotText}>Find All You Need</Text>
        <Text></Text>
      </View>
      <ScrollView>
        <View style={style.iconHeader}>
        {dataDemo.map((item) => (
          <View key={item.id}>
            <View style={{alignItems: 'center'}}>
            <Image source={item.icon} style={{height: 32, width: 32}}/>
            <Text>{item.name}</Text>
            </View>
          </View>
        ))}
        </View>
      </ScrollView>
    </View>
  );
}



const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 18,
    // borderWidth: 2,
    // borderColor: 'red'
  },
  vectorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  vector: {
    backgroundColor: "#fff",
    height: 20,
    width: 20,
  },
  vectotText: {
    color: "#303030",
    fontWeight: "bold",
  },
  directionIcon: {},
  demoHeader: {
    backgroundColor: "#ddd",
    borderRadius: 2,
  },
  item: {
    flexDirection: "row",
  },
  demoIcon: {
    height: 20,
    width: 20,
  },
  iconHeader: {
    paddingTop: 18,
    gap: 20, 
    // display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

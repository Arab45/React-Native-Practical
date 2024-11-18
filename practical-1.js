import {  Text, View, Image, StyleSheet, ScrollView  } from 'react-native';
import { demoData } from './assets/data/data';

const image = require('./assets/Icon.png.jpg')

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.headerContainer}>
          <Text>Home</Text>
          <Text>Menu</Text>
          <Text>About</Text>
      </View>
      <ScrollView>
        <View style={style.imageParent}>
        <Image source={image} style={style.image}/>
        <Image source={image} style={style.image}/>
        <Image source={image} style={style.image}/>
        <Image source={image} style={style.image}/>
        <Image source={image} style={style.image}/>
      </View>
      {demoData.map((item, i) => {
        <View key={i} style={style.demo}>
          <Text>Name: {item.name}</Text>
          <Text>Grade: {item.point}</Text>
        </View>
      })}
      </ScrollView>
    </View>
  );
};

//space-between

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#BF2EF0',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  headerContainer: {
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  test: {
    textAlign: 'center'
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    // width: 300
  },
  imageParent: {
    alignItems: 'center',
    marginTop: 20,
    gap: 50,
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
  demo: {
    backgroundColor: '#fff',
    height: 300,
    weight: 400
  }
})
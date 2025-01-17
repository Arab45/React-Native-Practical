//import React, { useState } from "react";
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
  SafeAreaView,
} from "react-native";

//import { demoData }  from "./data/data";
import { products } from "./data/product";

const vector = require("./assets/Vector.png");
const group9 = require("./assets/Group-9.png");
const marker = require("./assets/marker-1.png");
const clarity = require("./assets/clarity_home-solid.png");
const bi = require("./assets/bi_person.png");
const chair = require("./assets/Group-2.png");
const table = require("./assets/Group-4.png");
const armchair = require("./assets/Group-6.png");
const bed = require("./assets/Group-8.png");
const lamp = require("./assets/mask-group.png");
const coffeeTable = require("./assets/mask-group1.png");
const coffeeChair = require("./assets/mask-group2.png");
const desk = require("./assets/mask-group3.png");

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView style={style.header}>
      <View style={style.container}>
        <View style={style.vectorContainer}>
          <Image source={vector} style={style.vector} />
          <Text style={style.vectorText}>Find All You Need</Text>
          <Text></Text>
        </View>
        <View style={style.category}>
          <Image source={group9} style={style.starStyle} />
          <Image source={chair} style={style.starStyle} />
          <Image source={table} style={style.starStyle} />
          <Image source={armchair} style={style.starStyle} />
          <Image source={bed} style={style.starStyle} />
        </View>

        <View style={style.imageContainer}>
          <View style={style.subImageContaier}>
            <View style={style.innerImageContainer}>
              <Image source={lamp} style={style.images} />
              <View style={style.imageText}>
                <Text>Black Simple Lamp</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  $ 12.00
                </Text>
              </View>
            </View>
            <View style={style.innerImageContainer}>
              <Image source={coffeeTable} style={style.images} />
              <View style={style.imageText}>
                <Text>Minimal Stand</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  $ 25.00
                </Text>
              </View>
            </View>
          </View>

          <View style={style.subImageContaier}>
            <View style={style.innerImageContainer}>
              <Image source={coffeeChair} style={style.images} />
              <View style={style.imageText}>
                <Text>Coffee Chair</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  $ 20.00
                </Text>
              </View>
            </View>
            <View style={style.innerImageContainer}>
              <Image source={desk} style={style.images} />
              <View style={style.imageText}>
                <Text>Simple Desk</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  $ 50.00
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* <FlatList
       data={products}
       renderItem={({item, i}) => (
         <View key={i} style={{backgroundColor: 'yellow', width: boxSize}}>
          <View style={{backgroundColor: 'gray', margin: 10, }}>
              <Image source={item.icon} style={style.imageProduct}/>
              <View>
                  <Text style={style.iconText}>{item.price}</Text>
                  <Text  style={style.iconText}>{item.name}</Text>
              </View>
          </View>
        </View>
       )}
       /> */}

        <View style={style.footerHeader}>
        <View style={style.footerContainer}>
          <Image source={clarity} style={style.footerImage} />
          <Image source={marker} style={style.footerImage} />
          <Image source={bi} style={style.footerImage} />
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "blue",
    //paddingVertical: StatusBar.currentHeight,
    //paddingHorizontal: 10
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    gap: 20,
    borderWidth: 1,
    borderColor: "red",
    //borderWidth: 1,
  },
  vectorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  vector: {
    width: 24,
    height: 24,
  },
  vectorText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerImage: {
    height: 50,
    width: 50,
  },
  productBox: {
    //backgroundColor: 'gray',
    //  width: width / 2,
    flexDirection: "row",
  },
  boxArrangement: {
    backgroundColor: "gray",
  },
  iconText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerHeader: {
    flex: 1,
    justifyContent: "flex-end",
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 20

  },
  innerImageContainer: {
    width: "50%",
    paddingHorizontal: 5,
    gap: 10
  },
  images: {
    height: 250,
    borderRadius: 10,
    // borderWidth: 6,
  },
  subImageContaier: {
    // flex: 1,
    flexDirection: "row",
    // borderWidth: 1,
  },
  imageText: {},
});

// import { View, Text, StyleSheet, StatusBar, Image, TextInput, Pressable, SafeAreaView } from "react-native";
// import headerIcon from './assets/Frame-14.png';
// import lamp from './assets/mask-group.png';
// import plus from './assets/plus.png';
// import Icon from 'react-native-vector-icons/Fontisto';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './splash-page.js';
// import Signup from './signup.js';
// import Login from './signIn.js'

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
//         <Stack.Screen name='SignUp' component={Signup} options={{headerShown: false}}/>
//         <Stack.Screen name='LoginPage' component={Login} options={{headerShown: false}}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// // export default function Lastpage () {
// //     return (
// //         <View style={style.container}>
// //             <View style={style.mainContainer}>
// //                 <Image source={headerIcon} style={style.iconHeaderStyle}/>
// //                 <Text style={style.textHeader}>Create a new listings</Text>
// //                 <Text></Text>
// //             </View>
// //             <Text style={style.photoText}>Upload photos</Text>
// //             <View style={style.mainUploadBox}>
// //                 {/* <TextInput style={style.uploadForm}/> */}
// //                 <View style={style.uploadForm}>
// //                     <View style={style.mainplusHeader}>
// //                         <Image source={plus} style={style.plusImage}/>
// //                     </View>
// //                 </View>
// //                 <View style={style.rightImage}>
// //                     <Image source={lamp} style={style.uploadImage} />
// //                     <View style={style.mainTextX}>
// //                         <Icon name="close" size={24} color="#4F63AC"/>
// //                     </View>
// //                 </View>
// //             </View>
// //             <View style={style.mainInput}>
// //                 <View style={style.submainInput}>
// //                     <Text style={style.labelText1}> Title </Text>
// //                     <TextInput style={style.form1} placeholder="Listing Title"/>
// //                 </View>
// //                 <View style={style.submainInput}>
// //                     <Text style={style.labelText1}>Category</Text>
// //                     <TextInput style={style.form1} placeholder="Select the category"/>
// //                 </View>
// //                 <View style={style.submainInput}>
// //                     <Text style={style.labelText1}>Price</Text>
// //                     <TextInput style={style.form1} placeholder="Enter price in USD"/>
// //                 </View>
// //                 <View style={style.submainInput}>
// //                     <Text style={style.labelText2}>Description</Text>
// //                     <TextInput style={style.form2} placeholder="Tell us more..."/>
// //                 </View>
// //             </View>
// //             <View style={style.mainBottom}>
// //                 <Pressable style={style.buttonContainer}>
// //                     <Text style={style.buttomText}>Submit</Text>
// //                 </Pressable>
// //             </View>
// //         </View>
// //     )
// // }

// // const style = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: '#fff',
// //         paddingVertical: StatusBar.currentHeight,
// //         gap: 20,
// //         paddingHorizontal: 20
// //     },
// //     mainContainer: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         justifyContent: 'space-between',
// //     },
// //     iconHeaderStyle: {
// //         height: 24,
// //         width: 24
// //     },
// //     textHeader: {
// //         fontSize: 24,
// //         fontWeight: 'bold'
// //     },
// //     photoText: {
// //         fontSize: 24,
// //         color: '#A7B1D5'
// //     },
// //     uploadForm: {
// //         borderWidth: 1,
// //         borderStyle: 'dotted',
// //         height: 90,
// //         width: 90,
// //         borderRadius: 5,
// //         alignItems: 'center',
// //         justifyContent: 'center'
// //     },
// //     mainplusHeader: {
// //         backgroundColor: '#ddd',
// //         height: 30,
// //         width: 30,
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         borderRadius: 16
// //     },
// //     // plusImage: {

// //     // },
// //     mainUploadBox: {
// //         flexDirection: 'row',
// //         gap: 10,

// //     },
// //     uploadImage: {
// //         height: 90,
// //         width: 90
// //     },
// //     rightImage: {
// //         flexDirection: 'row'
// //     },
// //     mainTextX: {
// //         left: 74,
// //         bottom: 95
// //     },
// //     textX: {
// //         color: '#4F63AC',
// //         textAlign: 'center',
// //         fontWeight: 'bold'
// //     },
// //     rightImage: {
// //         position: 'relative'
// //     },
// //     mainInput:{
// //         gap: 20
// //     },
// //     labelText1:{
// //         fontSize: 18,
// //         color: '#4F63AC'
// //     },
// //     form1: {
// //         borderWidth: 1,
// //         borderColor: '#8D9BB5',
// //         height: 59,
// //         width: 303,
// //         borderRadius: 16,
// //         paddingHorizontal: 10
// //     },
// //     labelText2: {
// //         fontSize: 18,
// //         color: '#4F63AC'
// //     },
// //     form2: {
// //         borderWidth: 1,
// //         borderColor: '#8D9BB5',
// //         borderRadius: 16,
// //         paddingHorizontal: 10,
// //         height: 130,
// //         width: 303,
// //         textAlignVertical: 'top'
// //     },
// //     submainInput: {
// //         gap: 5,
// //     },
// //     mainBottom:{
// //         marginBottom: StatusBar.currentHeight
// //     },
// //     buttonContainer: {
// //         backgroundColor: '#4F63AC',
// //         height: 50,
// //         width: 303,
// //         borderRadius: 8,
// //         justifyContent: 'center',
// //     },
// //     buttomText: {
// //         textAlign: 'center',
// //         fontSize: 24,
// //         fontWeight: 'bold',
// //         color: '#fff'
// //     }
// // })

import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { favorite } from "./data/favoriteProduct";
import  image  from './assets/mask-group3.png'


export default function Product () {
    return(
        <View style={style.container}>
            <Text style={style.header}>Favorites</Text>
            <View style={style.favoriteContainer}>
                {favorite.map((item) => (
                    <View style={style.favoriteBox} key={item.id}>
                        <View style={style.leftContent}>
                        <Image source={item.image} style={style.imageIcon} resizeMode="cover" />
                        <View>
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                        </View>
                        </View>
                        <View style={style.rightContent}>
                            <Text style={style.rightText}> X </Text>
                        </View>
                    </View>
                ))}
            </View>
            <Image source={image}/>
        </View>
    )
}

const style = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: StatusBar.currentHeight,
    paddingHorizontal: 10
   },
   header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
   },
   imageIcon: {
    height: 100,
    width: 100
   },
   favoriteBox: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
   },
   rightContent: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 16,
    borderColor: '#4F63AC',
    flexDirection: 'row'
   },
   rightText: {
    color: '#4F63AC',
   },
   favoriteContainer: {
    gap: 10,
    borderWidth: 1,
   },
   leftContent: {
    flexDirection: 'row',
   }
})
















































































































// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   Pressable,
//   FlatList,
//   ScrollView,
//   StatusBar,
//   Platform,
//   useWindowDimensions,
//   SafeAreaView
// } from "react-native";

// import { demoData }  from "./data/data"; 
// import { products }  from "./data/product";


// const vector = require("./assets/Vector.png");
// const group9 = require("./assets/Group 9.png");
// const marker = require("./assets/marker 1.png");
// const clarity = require("./assets/clarity_home-solid.png");
// const bi = require('./assets/bi_person.png');
// const chair = require('./assets/Group 2.png');
// const table = require('./assets/Group 4.png');
// const armchair = require('./assets/Group 6.png');
// const bed = require('./assets/Group 8.png');



// export default function App() {
//   const { width } = useWindowDimensions();
// // console.log(width);
//   const boxSize = width / 2;
//   // console.log(boxSize);
//   return (
//     <SafeAreaView style={style.header}>
//       <View style={style.container}>
//         <View style={style.vectorContainer}>
//           <Image source={vector} style={style.vector}/>
//           <Text style={style.vectorText}>Find All You Need</Text>
//           <Text></Text>
//         </View>
//         <View style={style.category}>
//           <Image source={group9} style={style.starStyle}/>
//           <Image source={chair} style={style.starStyle}/>
//           <Image source={table} style={style.starStyle}/>
//           <Image source={armchair} style={style.starStyle}/>
//           <Image source={bed} style={style.starStyle}/>
//         </View>

//        <FlatList
//        data={products}
//        renderItem={({item}) => (
//         <View style={style.productContainer}>
//           <Image source={item.icon} style={style.iconImage}/>
//           <Text>{item.name}</Text>
//           <Text>{item.price}</Text>
//         </View>
//        )}
//        keyExtractor={(item, index) => index.toString() }
//       //  numColumns={boxSize}
//        />

//         <View style={style.footerContainer}>
//           <Image source={clarity} style={style.clarityStyle}/>
//           <Image source={marker} style={style.clarityStyle}/>
//           <Image source={bi} style={style.clarityStyle}/>
//         </View>
//       </View>
//     </SafeAreaView> 
//   );
// }



// const style = StyleSheet.create({
//   header: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingHorizontal: 20,
//     padding: 20,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: StatusBar.currentHeight,
//     gap: 20,
//     borderWidth: 1,
//     borderWidth: 1,
//     borderColor: 'red'
    
//   },
//   vectorContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 20
//   },
//   vector: {
//   width: 24,
//   height: 24
//   },
//   vectorText: {
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   category: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     borderWidth: 1,
//     borderColor: 1
//   },
//   footerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 24,
//     borderWidth: 1,
//     borderColor: 'black'
//   },
//   iconImage: {
//     height: 20,
//     width: 20
//   },
//   clarityStyle: {
//     height: 24,
//     width: 24
//   },
//   productContainer: {
//     borderWidth: 1,
//     borderColor: 'red'
//   }
// });

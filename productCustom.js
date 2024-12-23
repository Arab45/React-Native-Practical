import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import product from './assets/Mask Group (1).png'
import icon from './assets/marker 2.png'


export default function Product () {
    return(
        <View style={style.container}>
            <Image source={product} style={style.productImageDesign}/>
            <View style={style.box}>
            </View>
           <View style={style.contentContainer}>
           <Text style={style.stand}>Minimal Stand</Text>
            <Text style={style.price}> $ 50 </Text>
            <Text>Minimal Stand is made of by natural wood. 
                The design that is very simple and minimal. 
                This is truly one of the best furnitures in any family for now. 
                With 3 different colors, you can easily select the best match for your home. 
                </Text>
                <View style={style.contactContainer}>
                    <Image source={icon} style={style.imageIcon}/>
                    <Text style={style.contactStyle}>Contact seller</Text>
                </View>
           </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        zIndex: 0
    },
    productImageDesign: {
        width: '100%',
        height: 441,
    },
    contentContainer: {
        padding: 16,
        gap: 16,
    },
    stand: {
        fontSize: 24,
        fontWeight: '600',
        alignItems: 'center',
        fontFamily: 'Gelasio',
        fontWeight: '600'
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center'
    },
    contactStyle: {
        backgroundColor: "#4F63AC",
        textAlign: 'center',
        width: 250,
        height: 60,
        borderRadius: 8,
        color: '#fff',
        fontSize: 24,
        padding: 16,
    },
    contactContainer: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        marginTop: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',        
    },
    imageIcon: {
        width: 60,
        height: 60,
        backgroundColor: '#F2F2F2',
        borderRadius: 5
    },
    box: {
        backgroundColor: 'red',
        width: '100%',
        zIndex: 2
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

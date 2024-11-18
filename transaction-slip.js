import { StatusBar } from 'expo-status-bar';
import {  Text, View, Image  } from 'react-native';
import { transStyle } from './assets/transactionStyle';

const transaction = require("./assets/Icon.png.jpg");



export default function App() {
  return (
    <View style={transStyle.container}>
      <View style={transStyle.parentContainer}>
        <View>
        </View>
        <Text>Wallet</Text>
        <Image source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwwv8lms8LmU1LXGj8nlOgQ90Bdv3tCNn-LFDIE5KOJLkxv1bCntSpSVLFbpAmQEEt5E&usqp=CAU"}}
          style={transStyle.transIconStyle} 
        />
      </View>
    </View>
  );
}

//space-between
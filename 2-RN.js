import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import { style } from './assets/ImageStyle';



const ecommerce = require("./assets/ecommerce.png.jpg");
export default function App() {
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.parentContainer}>
          <Image source={ecommerce} style={{height: 200, width: 200}} />
          <Image source={ecommerce} style={{height: 200, width: 200}} />
          <Text style={style.text}>This is an ecommerce mobile application</Text>
          <Image source={ecommerce} style={{height: 200, width: 200}} />
          <Image source={ecommerce} style={{height: 200, width: 200}} />
          <Image source={ecommerce} style={{height: 200, width: 200}} />
          <Image 
          source={{uri: "https://enginescout.com.au/wp-content/uploads/2021/09/facebook-ads-for-ecommerce-1.png"}} 
          style={style.imageStyle}
          />
        </View>
      </ScrollView>
    </View>
  );
}

//space-between
import { View, Text, StyleSheet, Image } from "react-native";
import product from './assets/Mask Group (1).png'

export default function Product () {
    return(
        <View>
            <Image source={product} style={style.productImageDesign}/>
           <View>
           <Text>Minimal Stand</Text>
            <Text> $ 50 </Text>
            <Text>Minimal Stand is made of by natural wood. 
                The design that is very simple and minimal. 
                This is truly one of the best furnitures in any family for now. 
                With 3 different colors, you can easily select the best match for your home. 
                </Text>
           </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    productImageDesign: {
        height: 441,
        width: 375
    }
})
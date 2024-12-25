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
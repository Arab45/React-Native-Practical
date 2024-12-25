import { View, Text, StatusBar, StyleSheet, Image } from "react-native";
import porductImage1 from "./assets/mask-group4.png";
import productImage2 from "./assets/mask-group2.png";
import productImage3 from "./assets/mask-group1.png";
import deleteVector from "./assets/Vector-1.png";
import icon2 from "./assets/marker-1.png";
import icon3 from "./assets/bi_person-fill.png";
import icon1 from "./assets/clarity_home-solid-1.png";

export default function App() {
  const data = [
    {
      icon: porductImage1,
      name: "Coffee Table",
      price: "$ 50.00",
    },
    {
      icon: productImage2,
      name: "Coffee Chair",
      price: "$ 20.00",
    },
    {
      icon: productImage3,
      name: "Minimal Stand",
      price: "$ 25.00",
    },
  ];
  return (
    <View style={style.container}>
      <View style={style.mainContent}>
        <View style={style.header}>
          <Text style={style.headerText}>My Listings</Text>
        </View>
        {data.map((item, i) => (
          <View key={i} style={style.productHContainer}>
            <View style={style.leftProduct}>
              <Image source={item.icon} style={style.imageProduct} />
              <View>
                <Text>{item.name}</Text>
                <Text style={style.imageText}>{item.price}</Text>
              </View>
            </View>
            <View>
              <Image source={deleteVector} />
            </View>
          </View>
        ))}
        ;
      </View>

      <View style={style.footerContainer}>
        <Image source={icon1} style={style.footerImage} />
        <Image source={icon2} style={style.footerImage} />
        <Image source={icon3} style={style.footerImage} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: StatusBar.currentHeight,
    paddingHorizontal: 16,
    gap: 20,
    height: "100%",
    justifyContent: 'space-between'
  },
  mainContent: {
    // borderWidth: 1,
    // borderColor: 'black'
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  leftProduct: {
    flexDirection: "row",
    gap: 10,
  },
  productHContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    // gap: 72,
  },
  imageProduct: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  imageText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: "center"
  },
  footerImage: {
    height: 24,
    width: 24,
  },
});

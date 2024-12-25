import { StyleSheet, View, Text, StatusBar, Image, Platform } from "react-native";
import  icon  from './assets/Frame-15.png';
import  sidebar  from './assets/Frame-15-3.png';
import  icon2  from './assets/marker-1.png';
import  icon3  from './assets/bi_person-fill.png';
import  icon1  from './assets/clarity_home-solid-1.png';


export default function Profile () {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text></Text>
                <Text style={style.headerText}>Profile</Text>
                <Image source={icon} style={style.imageIcon}/>
            </View>
            <View>
                <Text style={style.nameText}>Elina Hovakimyan</Text>
                <Text>hello@gmail.com</Text>
            </View>
            <View style={style.boxContainer}>
                <View style={style.box1}>
                    <Text style={style.firstBox}>My Listens</Text>
                    <Text>Already have 10 listen</Text>
                </View>
                <View>
                    <Image source={sidebar} style={style.sideIcon}/>
                </View>
            </View>
            <View style={style.boxContainer}>
                <View>
                    <Text style={style.secondBox}>Settings</Text>
                    <Text>Account, FAQ, Contact</Text>
                </View>
                <View >
                    <Image source={sidebar} style={style.sideIcon} />
                </View>
            </View>
            <View style={style.footerBox}>
                <Text style={style.footerText}>Add a new listing</Text>
            </View>
            <View style={style.footerIcon}>
                <Image source={icon1} style={style.iconStyle} />
                <Image source={icon2} style={style.iconStyle} />
                <Image source={icon3} style={style.iconStyle} />
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: StatusBar.currentHeight,
        gap: 20
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    imageIcon: {
        height: 20,
        width: 20
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    boxContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center'
    },
    firstBox: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4F63AC',
        paddingBottom: 2
    },
    secondBox: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4F63AC',
        paddingBottom: 2
    },
    sideIcon: {
        height: 24,
        width: 24
    },
    footerBox: {
        backgroundColor: "#4F63AC",
        height: 64,
        borderRadius: 8,
        marginTop: 274,
        justifyContent: 'center'
    },
    footerText: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
    },
    footerIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 56 : 56,
        justifyContent: 'space-between'
    },
    iconStyle: {
        height: 24,
        width: 24
    }
})
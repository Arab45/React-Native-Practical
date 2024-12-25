import { View, Text, StatusBar, Image, StyleSheet } from "react-native";
import  iconPen  from './assets/edit-2.png';
import  sidebar  from './assets/Frame-15-3.png';
import  icon2  from './assets/marker-1.png';
import  icon3  from './assets/bi_person-fill.png';
import  icon1  from './assets/clarity_home-solid-1.png'

export default function Setting () {
    return (
        <View style={style.container}>
            <View style={style.headerContainer}>
                <Text style={style.header}>Settings</Text>
            </View>
            <View style={style.subHeader}>
                <Text style={style.subHeaderText}>Personal Information</Text>
                <Image source={iconPen} style={style.imageIcon} />
            </View>
            <View style={style.boxContainer}>
                <View style={style.firstBox}>
                    <Text style={style.textStyle}>Name</Text>
                    <Text style={style.boxText}>Bruno Pham</Text>
                </View>
                <View style={style.secondBox}>
                    <Text style={style.textStyle}>Email</Text>
                    <Text style={style.boxText}>bruno203@gmail.com</Text>
                </View>
                <Text style={style.helpStyle}>Help Center</Text>
                <View style={style.helpCenterContainer}>
                    <View style={style.helpCenter}>
                        <Text style={style.sidebarText}>FAQ</Text>
                        <Image source={sidebar} style={style.sidebarImageStyle} />
                    </View>
                    <View style={style.helpCenter}>
                        <Text style={style.sidebarText}>Contact Us</Text>
                        <Image source={sidebar} style={style.sidebarImageStyle} />
                    </View>
                    <View style={style.helpCenter}>
                        <Text style={style.sidebarText}>Privacy & Terms</Text>
                        <Image source={sidebar} style={style.sidebarImageStyle} />
                    </View>
                </View>
            </View>
            <View style={style.footerContainer}>
                <Image source={icon1} style={style.footerImage} />
                <Image source={icon2} style={style.footerImage} />
                <Image source={icon3} style={style.footerImage} />
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
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageIcon: {
        height: 24,
        width: 24
    },
    subHeaderText: {
        color: '#909191'
    },
    boxContainer: {
        gap: 20
    },
    firstBox: {
        backgroundColor: '#fff',
        padding: 20
    },
    secondBox: {
        backgroundColor: '#fff',
        padding: 20
    },
    boxText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4F63AC'
    },
    helpStyle: {
        color: '#909191',
        fontSize: 20,
        marginTop: 32
    },
    helpCenterContainer: {
        gap: 20
    },
    helpCenter: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8,
        padding: 16
    },
    sidebarImageStyle: {
        height: 24,
        width: 24
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 167
    },
    footerImage: {
        height: 24,
        width: 24
    },
    sidebarText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4F63AC'
    },
    textStyle: {
        color: '#909191'
    }
});
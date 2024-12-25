import { View, Text, StyleSheet, StatusBar, Image, TextInput, Pressable, SafeAreaView } from "react-native";
import headerIcon from './assets/Frame-14.png';
import lamp from './assets/mask-group.png';
import plus from './assets/plus.png';

export default function App () {
    return (
        <View style={style.container}>
            <View style={style.mainContainer}>
                <Image source={headerIcon} style={style.iconHeaderStyle}/>
                <Text style={style.textHeader}>Create a new listings</Text>
                <Text></Text>
            </View>
            <Text style={style.photoText}>Upload photos</Text>
            <View style={style.mainUploadBox}>
                {/* <TextInput style={style.uploadForm}/> */}
                <View style={style.uploadForm}>
                    <View style={style.mainplusHeader}>
                        <Image source={plus} style={style.plusImage}/>
                    </View>
                </View>
                <View style={style.rightImage}>
                    <Image source={lamp} style={style.uploadImage} />
                    <View style={style.mainTextX}>
                        <Text style={style.textX}> X </Text>
                    </View>
                </View>
            </View>
            <View style={style.mainInput}>
                <View style={style.submainInput}>
                    <Text style={style.labelText1}> Title </Text>
                    <TextInput style={style.form1} placeholder="Listing Title"/>
                </View>
                <View style={style.submainInput}>
                    <Text style={style.labelText1}>Category</Text>
                    <TextInput style={style.form1} placeholder="Select the category"/>
                </View>
                <View style={style.submainInput}>
                    <Text style={style.labelText1}>Price</Text>
                    <TextInput style={style.form1} placeholder="Enter price in USD"/>
                </View>
                <View style={style.submainInput}>
                    <Text style={style.labelText2}>Description</Text>
                    <TextInput style={style.form2} placeholder="Tell us more..."/>
                </View>
            </View>
            <View style={style.mainBottom}>
                <Pressable style={style.buttonContainer}>
                    <Text style={style.buttomText}>Submit</Text>
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: StatusBar.currentHeight,
        gap: 20,
        paddingHorizontal: 20
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconHeaderStyle: {
        height: 24,
        width: 24
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    photoText: {
        fontSize: 24,
        color: '#A7B1D5'
    },
    uploadForm: {
        borderWidth: 1,
        borderStyle: 'dotted',
        height: 90,
        width: 90,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainplusHeader: {
        backgroundColor: '#ddd',
        height: 30,
        width: 30, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    },
    // plusImage: {
       
    // },
    mainUploadBox: {
        flexDirection: 'row',
        gap: 10,

    },
    uploadImage: {
        height: 90,
        width: 90
    }, 
    rightImage: {
        flexDirection: 'row'
    },
    mainTextX: {
        backgroundColor: '#fff',
        width: 24,
        height: 24,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#4F63AC',
        left: 74,
        bottom: 95
    },
    textX: {
        color: '#4F63AC',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    rightImage: {
        position: 'relative'
    },
    mainInput:{
        gap: 20
    },
    labelText1:{
        fontSize: 18,
        color: '#4F63AC'
    },
    form1: {
        borderWidth: 1,
        borderColor: '#8D9BB5',
        height: 59,
        width: 303,
        borderRadius: 16,
        paddingHorizontal: 10
    },
    labelText2: {
        fontSize: 18,
        color: '#4F63AC'
    },
    form2: {
        borderWidth: 1,
        borderColor: '#8D9BB5',
        borderRadius: 16,
        paddingHorizontal: 10,
        height: 130,
        width: 303,
        textAlignVertical: 'top'
    },
    submainInput: {
        gap: 5,
    },
    mainBottom:{
        marginBottom: StatusBar.currentHeight
    },
    buttonContainer: {
        backgroundColor: '#4F63AC',
        height: 50,
        width: 303,
        borderRadius: 8,
        justifyContent: 'center',
    },
    buttomText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    }
})
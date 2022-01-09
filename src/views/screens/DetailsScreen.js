import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { ImageBackground, Image, SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native'
import COLORS from "../../consts/Colors";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("screen");

const DetailsScreen = ({ navigation,route }) => {
    const detail = route.params;
    return (
        <View>
            <SafeAreaView>
                <StatusBar translucent backgroundColor={COLORS.transparent} />
                <ImageBackground source={detail.img} resizeMode="cover" style={style.image}>
                    <Icon
                    name="arrow-back-ios"
                    size={20}
                    style={{color:'white', marginTop:100, marginLeft:40}}
                    onPress={navigation.goBack}
                />
                </ImageBackground>
                <Text style={style.title}>{detail.detailIitle}</Text>
                <ScrollView>
                    <Text style={style.textDetail}>
                    {detail.detailNote}
                </Text>
                </ScrollView>
                <View sytle={style.footer}></View>
            </SafeAreaView>
        </View>
    );
}

export default DetailsScreen

const style = StyleSheet.create({
    image: {
        height: 300,
        width: width
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 10
    },
    textDetail:{
        padding:10,
        fontSize:15,
        color:COLORS.dark,
        textAlign:'justify',
        marginBottom:10
    },
    footer:{
        marginTop:100
    }
});

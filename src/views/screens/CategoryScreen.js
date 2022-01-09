import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Pressable,
    Image,
    SafeAreaView,
    
} from "react-native";
import COLORS from "../../consts/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

import { FlatList, ScrollView } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");
const CategoryScreen = ({navigation, route}) => {
    const category = route.params;
    const pagetitle = route.screen;
    const [title, setTitle] = useState('')

    const Card = () => {
        return (
            <>
            {category.map((category) => (
            <Pressable key={category.id}
                onPress={() => navigation.navigate("DetailsScreen",category.detail)}
            >
                
                    <View style={style.card} key={category.id}>
                        <Image
                            source={category.image}
                            style={style.cardImage}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 10
                            }}
                        >
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                {category.title}
                            </Text>
                        </View>
                        <Text
                            style={{
                                color: COLORS.grey,
                                fontSize: 14,
                                marginTop: 5
                            }}
                        >
                            {category.location}
                        </Text>
                    </View>
            </Pressable>
        ))}
    </>
        );
    };

    return (
        <SafeAreaView>
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
            <View style={style.header}>
                <View style={style.headerWrapper}>
                <View style={style.headerBtn}>
								<Icon
									name="arrow-back-ios"
									size={20}
									onPress={navigation.goBack}
								/>
							</View>
                    <View style={style.headerTexts}>
                        <Text style={{ color: COLORS.grey }}>Category</Text>
                            <Text
                                style={{
                                    color: COLORS.dark,
                                    fontSize: 30,
                                    fontWeight: "bold"
                                }}
                            >
                            {}
                        </Text>
                    </View>
                </View>
            </View>
            <ScrollView style={{marginBottom:120}}>
                <Card />
            </ScrollView>
        </SafeAreaView>
    );
};

export default CategoryScreen;

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    headerWrapper:{
        flexDirection:'row'
    },
    headerTexts:{
        marginLeft:10
    },
    cardImage: {
        width: "100%",
        height: 180,
        borderRadius: 15
    },
    facility: {
        flexDirection: "row",
        marginRight: 15
    },
    headerBtn: {
        height: 50,
        width: 50,
        backgroundColor: COLORS.white,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        height: 290,
        flex: 1,
        backgroundColor: COLORS.white,
        elevation: 10,
        width: width - 40,
        marginRight: 10,
        marginLeft: 20,
        padding: 15,
        borderRadius: 10,
        marginTop: 5,
        marginBottom:10
    },
    facilityText: {
        marginLeft: 5,
        color: COLORS.grey
    }
});

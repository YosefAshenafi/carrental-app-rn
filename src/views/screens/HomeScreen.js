import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    Pressable
} from "react-native";
import COLORS from "../../consts/Colors";
import DATA from "../../consts/Data";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
    
    const ListOptions = () => {
        return (
            <View style={style.optionListContainer}>
                {DATA.map((option, index) => (
                    <Pressable key={option.key} onPress={() => navigation.navigate("CategoryScreen",option.category)}>
                        <View style={style.optionCard}>
                            <Image
                                source={option.img}
                                style={style.optionCardImage}
                            />
                            <Text
                                style={{
                                    marginTop: 10,
                                    fontSize: 18,
                                    fontWeight: "bold"
                                }}
                            >
                                {option.title}
                            </Text>
                        </View>
                    </Pressable>
                ))}
            </View>
        );
    };
    
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
            <StatusBar
                translucent={false}
                backgroundColor={COLORS.white}
                barStyle="dark-content"
            />
            <View style={style.header}>
                <View>
                    <Text style={{ color: COLORS.grey }}>Location</Text>
                    <Text
                        style={{
                            color: COLORS.dark,
                            fontSize: 30,
                            fontWeight: "bold"
                        }}
                    >
                        Ethiopia
                    </Text>
                </View>
            </View>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20
                    }}
                >
                    <View style={style.searchInputContainer}>
                        <Icon name="search" size={25} color={COLORS.grey} />
                        <TextInput placeholder="Search attraction site..." />
                    </View>
                </View>
                <Text style={{marginLeft:20, marginTop:15, fontSize:28, fontWeight:'bold', color:'gray'}}>Categories</Text>
                <ListOptions />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const style = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        borderRadius: 10
    },
    filterBtn: {
        backgroundColor: COLORS.dark,
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10
    },
    optionListContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap:'wrap',
        paddingHorizontal: 20
    },
    optionCard: {
        height: 220,
        width: width / 2 - 30,
        elevation: 15,
        backgroundColor: COLORS.white,
        alignItems: "center",
        borderRadius: 20,
        paddingTop: 10,
        paddingHorizontal: 10,
        marginTop:10,
        marginBottom:15,
        textAlign:"center"
    },
    optionCardImage: {
        height: 140,
        borderRadius: 10,
        width: "100%"
    },
    categoryListContainer: {
        marginTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 40
    },
    categoryListText: {
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 5,
        color: COLORS.grey
    },
    activeCategoryListText: {
        color: COLORS.dark,
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    facility: {
        flexDirection: "row",
        marginRight: 15
    },
    facilityText: {
        marginLeft: 5,
        color: COLORS.grey
    }
});

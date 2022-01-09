import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Pressable,
    Dimensions
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import COLORS from "../../consts/Colors";
const { width } = Dimensions.get("screen");

const CAROUSELS = [
    { id: 0, url: require("../../assets/cover1.jpg") },
    { id: 1, url: require("../../assets/cover2.jpg") },
    { id: 2, url: require("../../assets/cover3.png") }
];
const RenderItem = ({ item }) => {
    let image = item.url;
    return <Image source={item.url} style={style.image} />;
};

const OnBoardScreen = ({ navigation }) => {
    const [selectedCarousel, setSelectedCarousel] = React.useState(0);
    const onViewableItemsChange = ({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems);
        console.log("Changed in this iteration", changed);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar translucent backgroundColor={COLORS.transparent} />
            <FlatList
                snapToInterval={width}
                data={CAROUSELS}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={(item) => item.id}
            ></FlatList>
            <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
                <View>
                    <Text style={style.title}>Reach your</Text>
                    <Text style={style.title}>Dream Destinations</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={style.textStyle}>
                        know about ethiopian stunning attractions
                    </Text>
                    <Text style={style.textStyle}>
                        at the comfort of your mobile device.
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    paddingBottom: 40
                }}
            >
                <Pressable onPress={() => navigation.navigate("HomeScreen")}>
                    <View style={style.btn}>
                        <Text style={{ color: COLORS.white, fontSize: 20 }}>
                            Get started
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};
const style = StyleSheet.create({
    image: {
        height: 420,
        width: width,
        borderBottomLeftRadius: 100
    },
    indicatorContainer: {
        height: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    indicator: {
        height: 7,
        width: 35,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
        borderRadius: 5
    },
    indicatorActive: {
        backgroundColor: COLORS.dark
    },
    title: {
        fontSize: 32,
        fontWeight: "bold"
    },
    textStyle: {
        fontSize: 16,
        color: COLORS.grey
    },
    btn: {
        height: 60,
        marginHorizontal: 20,
        backgroundColor: COLORS.dark,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    }
});
export default OnBoardScreen;

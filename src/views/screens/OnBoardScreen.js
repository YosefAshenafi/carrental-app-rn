import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Image,
	Pressable,
	Dimensions,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import COLORS from "../../consts/Colors";
const { width } = Dimensions.get("screen");

const CAROUSELS = [
	{ id: 0, url: require("../../assets/frontcar.jpg") },
	{ id: 1, url: require("../../assets/vehicle1.jpg") },
	{ id: 2, url: require("../../assets/buycar.jpg") },
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
					<Text style={style.title}>Find your</Text>
					<Text style={style.title}>dream Car</Text>
				</View>
				<View style={{ marginTop: 10 }}>
					<Text style={style.textStyle}>
						Reserve your car in just a few clicks
					</Text>
					<Text style={style.textStyle}>we value your time</Text>
				</View>
			</View>
			<View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}>
				<Pressable onPress={() => navigation.navigate("HomeScreen")}>
					<View style={style.btn}>
						<Text style={{ color: COLORS.white }}>Get started</Text>
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
		borderBottomLeftRadius: 100,
	},
	indicatorContainer: {
		height: 20,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	indicator: {
		height: 7,
		width: 35,
		backgroundColor: COLORS.grey,
		marginHorizontal: 5,
		borderRadius: 5,
	},
	indicatorActive: {
		backgroundColor: COLORS.dark,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
	},
	textStyle: {
		fontSize: 16,
		color: COLORS.grey,
	},
	btn: {
		height: 60,
		marginHorizontal: 20,
		backgroundColor: COLORS.dark,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default OnBoardScreen;

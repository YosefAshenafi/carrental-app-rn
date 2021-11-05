import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Image,
	Dimensions,
	Pressable,
} from "react-native";
import COLORS from "../../consts/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import cars from "../../consts/Cars";
import { StatusBar } from "expo-status-bar";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
	const ListOptions = () => {
		const optionsList = [
			{ title: "Rent a vehicle", img: require("../../assets/rentcar.jpg") },
			{ title: "Buy a vehicle", img: require("../../assets/buycar.jpg") },
		];
		return (
			<View style={style.optionListContainer}>
				{optionsList.map((option, index) => (
					<View style={style.optionCard} key={index}>
						<Image source={option.img} style={style.optionCardImage} />
						<Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
							{option.title}
						</Text>
					</View>
				))}
			</View>
		);
	};
	const ListCategories = () => {
		const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
		const categoryList = ["Popular", "Recommended", "Recent"];
		return (
			<View style={style.categoryListContainer}>
				{categoryList.map((category, index) => (
					<Pressable
						key={index}
						onPress={() => setSelectedCategoryIndex(index)}
					>
						<View>
							<Text
								style={[
									style.categoryListText,
									index == selectedCategoryIndex &&
										style.activeCategoryListText,
								]}
							>
								{category}
							</Text>
						</View>
					</Pressable>
				))}
			</View>
		);
	};
	const Card = ({ car }) => {
		return (
			<Pressable onPress={() => navigation.navigate("DetailScreen", car)}>
				<View style={style.card}>
					<Image source={car.image} style={style.cardImage} />
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginTop: 10,
						}}
					>
						<Text style={{ fontSize: 16, fontWeight: "bold" }}>
							{car.title}
						</Text>
						<Text
							style={{ fontSize: 16, fontWeight: "bold", color: COLORS.blue }}
						>
							{car.price}
						</Text>
					</View>
					<Text style={{ color: COLORS.grey, fontSize: 14, marginTop: 5 }}>
						{car.location}
					</Text>
					<View style={{ marginTop: 10, flexDirection: "row" }}>
						<View style={style.facility}>
							<Icon name="speed" size={18} />
							<Text style={style.facilityText}>180</Text>
						</View>
						<View style={style.facility}>
							<Icon name="fingerprint" size={18} />
							<Text style={style.facilityText}>2</Text>
						</View>
						<View style={style.facility}>
							<Icon name="local-gas-station" size={18} />
							<Text style={style.facilityText}>2000</Text>
						</View>
					</View>
				</View>
			</Pressable>
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
						style={{ color: COLORS.dark, fontSize: 20, fontWeight: "bold" }}
					>
						Addis Ababa
					</Text>
				</View>
				<Image
					source={require("../../assets/profile.jpg")}
					style={style.profileImage}
				/>
			</View>
			<ScrollView>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						paddingHorizontal: 20,
					}}
				>
					<View style={style.searchInputContainer}>
						<Icon name="search" size={25} color={COLORS.grey} />
						<TextInput placeholder="Search brand, model or make..." />
					</View>
					<View style={style.filterBtn}>
						<Icon name="tune" color={COLORS.white} size={25} />
					</View>
				</View>
				<ListOptions />
				<ListCategories />
				<FlatList
					snapToInterval={width - 10}
					contentContainerStyle={{ paddingLeft: 20, paddingVertical: 20 }}
					showsHorizontalScrollIndicator={false}
					horizontal
					data={cars}
					renderItem={({ item }) => <Card car={item} />}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};
const style = StyleSheet.create({
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	profileImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	searchInputContainer: {
		height: 50,
		backgroundColor: COLORS.light,
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		borderRadius: 10,
	},
	filterBtn: {
		backgroundColor: COLORS.dark,
		height: 50,
		width: 50,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10,
	},
	optionListContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
		paddingHorizontal: 20,
	},
	optionCard: {
		height: 210,
		width: width / 2 - 30,
		elevation: 15,
		backgroundColor: COLORS.white,
		alignItems: "center",
		borderRadius: 20,
		paddingTop: 10,
		paddingHorizontal: 10,
	},
	optionCardImage: {
		height: 140,
		borderRadius: 10,
		width: "100%",
	},
	categoryListContainer: {
		marginTop: 40,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 40,
	},
	categoryListText: {
		fontSize: 16,
		fontWeight: "bold",
		paddingBottom: 5,
		color: COLORS.grey,
	},
	activeCategoryListText: {
		color: COLORS.dark,
		borderBottomWidth: 1,
		paddingBottom: 5,
	},
	card: {
		height: 250,
		flex: 1,
		backgroundColor: COLORS.white,
		elevation: 10,
		width: width - 40,
		marginRight: 20,
		padding: 15,
		borderRadius: 20,
	},
	cardImage: {
		width: "100%",
		height: 140,
		borderRadius: 15,
	},
	facility: {
		flexDirection: "row",
		marginRight: 15,
	},
	facilityText: {
		marginLeft: 5,
		color: COLORS.grey,
	},
});
export default HomeScreen;

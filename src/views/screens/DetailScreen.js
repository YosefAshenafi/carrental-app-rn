import { CardAnimationContext } from "@react-navigation/stack";
import React from "react";
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Image,
	ImageBackground,
	ScrollView,
	Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/Colors";
const { width } = Dimensions.get("screen");

const DetailScreen = ({ navigation, route }) => {
	const car = route.params;
	const RelatedImage = ({ image }) => {
		return <Image source={image} style={style.relatedImage} />;
	};
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
			<ScrollView>
				<View style={style.backgroundImageContainer}>
					<ImageBackground style={style.backgroundImage} source={car.image}>
						<View style={style.header}>
							<View style={style.headerBtn}>
								<Icon
									name="arrow-back-ios"
									size={20}
									onPress={navigation.goBack}
								/>
							</View>
							<View style={style.headerBtn}>
								<Icon name="favorite" size={20} color={COLORS.red} />
							</View>
						</View>
					</ImageBackground>
					<View style={style.virtualTag}>
						<Text style={{ color: COLORS.white }}>Virtual Tag</Text>
					</View>
				</View>
				<View style={style.detailsContainer}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>
							{car.title}
						</Text>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<View style={style.ratingTag}>
								<Text style={{ color: COLORS.white, fontWeight: "bold" }}>
									4.8
								</Text>
							</View>
							<Text style={{ fontSize: 13, marginLeft: 5 }}>155 ratings</Text>
						</View>
					</View>
					<Text style={{ fontSize: 16, color: COLORS.grey }}>
						{car.location}
					</Text>
					<View style={{ marginTop: 20, flexDirection: "row" }}>
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
					<Text style={{ marginTop: 20, color: COLORS.grey }}>
						{car.details}
					</Text>
					<FlatList
						keyExtractor={(_, key) => key.toString()}
						contentContainerStyle={{ marginTop: 20 }}
						horizontal
						showsHorizontalScrollIndicator={false}
						data={car.related}
						renderItem={({ item }) => <RelatedImage image={item} />}
					/>
					<View style={style.footer}>
						<View>
							<Text
								style={{ color: COLORS.blue, fontSize: 18, fontWeight: "bold" }}
							>
								$1500
							</Text>
							<Text
								style={{ color: COLORS.grey, fontSize: 12, fontWeight: "bold" }}
							>
								Daily Rent
							</Text>
						</View>
						<View style={style.bookNowBtn}>
							<Text style={{ color: COLORS.white, fontSize: 20 }}>
								Book Now
							</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
const style = StyleSheet.create({
	backgroundImageContainer: {
		elevation: 20,
		marginHorizontal: 20,
		marginTop: 20,
		alignItems: "center",
		height: 350,
	},
	backgroundImage: {
		height: "100%",
		width: "100%",
		borderRadius: 20,
		overflow: "hidden",
	},
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
	},
	headerBtn: {
		height: 50,
		width: 50,
		backgroundColor: COLORS.white,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	virtualTag: {
		backgroundColor: COLORS.dark,
		marginTop: -20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	detailsContainer: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 40,
	},
	ratingTag: {
		height: 30,
		width: 35,
		backgroundColor: COLORS.blue,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	facility: {
		flexDirection: "row",
		marginRight: 15,
	},
	facilityText: {
		marginLeft: 5,
		color: COLORS.grey,
	},
	relatedImage: {
		width: width / 3 - 20,
		height: 80,
		marginRight: 10,
		borderRadius: 10,
	},
	footer: {
		height: 50,
		backgroundColor: COLORS.light,
		borderRadius: 10,
		paddingHorizontal: 20,
		marginVertical: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	bookNowBtn: {
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.dark,
		borderRadius: 10,
		paddingHorizontal: 20,
	},
});
export default DetailScreen;

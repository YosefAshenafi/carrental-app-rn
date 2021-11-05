const vehicles = [
	{
		id: "1",
		title: "Toyota Corolla",
		price: "$ 1500",
		location: "Morning Star mall branch",
		image: require("../assets/vehicle1.jpg"),
		details: `This vehicle is on perfect condition and only took a little amount of gasoline`,
		related: [
			require("../assets/vehicle2.jpg"),
			require("../assets/vehicle3.jpg"),
			require("../assets/vehicle4.jpg"),
		],
	},
	{
		id: "2",
		title: "BMW Benz",
		price: "$ 1000",
		location: "Morning Star mall branch",
		image: require("../assets/vehicle2.jpg"),
		details: `This vehicle is on good condition with fancy look and feel`,
		related: [
			require("../assets/vehicle1.jpg"),
			require("../assets/vehicle3.jpg"),
			require("../assets/vehicle4.jpg"),
		],
	},
	{
		id: "3",
		title: "Vitz",
		price: "$ 900",
		location: "Morning Star mall branch",
		image: require("../assets/vehicle3.jpg"),
		details: `This vehicle is on perfect condition and very easy for parking`,
		related: [
			require("../assets/vehicle1.jpg"),
			require("../assets/vehicle2.jpg"),
			require("../assets/vehicle4.jpg"),
		],
	},
	{
		id: "4",
		title: "Land Cruizer",
		price: "$ 1700",
		location: "Morning Star mall branch",
		image: require("../assets/vehicle4.jpg"),
		details: `This vehicle is on perfect condition and confortable for offroad travels`,
		related: [
			require("../assets/vehicle1.jpg"),
			require("../assets/vehicle2.jpg"),
			require("../assets/vehicle3.jpg"),
		],
	},
];

export default vehicles;

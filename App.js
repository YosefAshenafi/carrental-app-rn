import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import HomeScreen from "./src/views/screens/HomeScreen";
import DetailScreen from "./src/views/screens/DetailScreen";
import DetailsScreen from "./src/views/screens/DetailsScreen";
import CategoryScreen from "./src/views/screens/CategoryScreen";
import React from "react";
const Stack = createStackNavigator();
const App = () => {
	return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

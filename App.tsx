import {StatusBar} from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './pages/HomeScreen';
import ExerciseDetail from './pages/ExerciseDetail';

const Stack = createStackNavigator();

function RootStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
			<Stack.Screen name="Details" component={ExerciseDetail} options={{title: 'Exercise Details'}}/>
			<Stack.Screen name="Creation" component={ExerciseDetail} options={{title: 'Create Exercise'}}/>
		</Stack.Navigator>
	)
}

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
			<StatusBar style="auto"/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

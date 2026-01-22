import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

let mesazhi ="Hello World!"

export default function App() {
 return (
//  <NavigationContainer>
//  <Stack.Navigator initialRouteName="Main">
//  <Stack.Screen name="Main" component={MainScreen} />
//  </Stack.Navigator>
//  </NavigationContainer>

<View style={styles.container}>
  <Text style={styles.TextStyle}>{mesazhi}</Text>
</View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 
 backgroundColor: 'white',
 alignItems: 'center',
 justifyContent: 'center',
 },TextStyle  : {
 fontSize: 40,
 color: 'blue',
 },
});
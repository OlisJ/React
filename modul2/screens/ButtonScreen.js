import React from 'react';
import { View, Text, Button, StyleSheet , TouchableOpacity } from 'react-native-web';

const ButtonScreen = () => {
    let couneter , counterT = 0;
    return (
        <View>
            <Text>Button Screen</Text>
            <Button title='Click Me' color='Purple'
            onPress={() => console.log('Button Clicked!', counter++)}></Button>
            
        </View>) }


export default ButtonScreen;
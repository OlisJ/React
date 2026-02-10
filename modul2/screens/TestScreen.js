import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const TestScreen = () => { 
    return(
        <View>
            <Text style={styles.textStyle}>This is the Test Screen</Text>
        </View>
    )
 }

 const styles =StyleSheet.create({
    textStyle: {
        fontSize: 30, }
 });

 export default TestScreen;
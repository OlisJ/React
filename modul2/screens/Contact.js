import React from "react";
import { Text, StyleSheet, View } from 'react-native';
import { Button } from "react-native-web";


const Contact =( ) => {
        return (<View>
    <Text style={styles.textStyle}>Contact </Text>; 
    <Button title="Go to Home"
        onPress={()=>navigation.navigate("Home")}/>
    </View>)
};



const styles = StyleSheet.create({
 container: {
 flex: 1,
 
 backgroundColor: 'white',
 alignItems: 'center',
 justifyContent: 'center',
 },
 textStyle: {
 fontSize: 30,
 },
});


export default Contact;
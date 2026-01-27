import React from "react";
import { Text, StyleSheet, View } from 'react-native';  
import { Button } from "react-native-web";

const Home =( ) => {
        return (<View>
    <Text style={styles.textStyle}>Home </Text>; 
    <Button title="Go to Second Example"
        onPress={()=>navigation.navigate("SecondExample")}/>
    </View>)
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
});


export default Home;    

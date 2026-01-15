import React from "react";
import{Text , StyleSheet, View} from "react-native";

const MainScreen = () => {
    return
    <View style={style.container}>
        <Text style={style.TextStyle}>This is the Main Screen</Text>
    </View> 
    }


const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    TextStyle:{
        fontSize:30,
    }   
})

export default MainScreen;
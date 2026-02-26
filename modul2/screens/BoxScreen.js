import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const BoxScreen =()=>{
    return(
        <View style={{flex:1, flexDirection:'row'}}>
            <View style={{height:100, width:100, backgroundColor:'red'}}/>
            <View style={{height:100, width:100, backgroundColor:'blue'}}/>
            <View style={{height:100, width:100, backgroundColor:'green'}}/>
        </View>
    );   
};


export default BoxScreen;
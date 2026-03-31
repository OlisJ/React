import React from "react";
import {View , Text , StyleSheet} from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconSection = ({name, label}) => {    
    return(
        <View>
        <MaterialCommunityIcons name={name}  size={32} color ={"#007aff"}/>
        <Text>{label}</Text>
    </View>
    )

}

const Styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginHorizontal:12,
    },
    label:{
        marginTop:6,
        fontSize :14,
        color:"#333"
    }
})

export default IconSection;
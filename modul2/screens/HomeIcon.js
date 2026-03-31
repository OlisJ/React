import React from "react";
import IconSection from "./IconSection";
import {View, Stylesheet} from 'react-native';


const Home=() =>{
    return (
        <View>
            <IconSection name="home" label="Home"/>
            <IconSection name="message" label="message"/>
            <IconSection name="cog" label="settings"/>
        </View>
    )
}

export default Home;
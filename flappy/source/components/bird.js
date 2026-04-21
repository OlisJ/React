import React from "react";
import {view} from 'react-native';


const Bird = () =>{
    const birdWidth = 40
    const birdHeight = 40


    return( 
        <Image style={{
            position:"absolute",
            left:birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2),
            width:40,
            height:40
        }}
        source={require('../../assets/bird.png')}
        resizeMode="stretch"
        />
    )
}
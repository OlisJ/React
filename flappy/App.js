import React,{ useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback,Image, TouchableWithoutFeedbackBase } from 'react-native';
import Bird from './source/components/Obstacle';

export default function App(){
  const screenWidth = Dimensions.get("screen").width
  const screenHeight= Dimensions.get("screen").height
  const birdLeft = screenWidth / 2
  const [birdBottom, setBirdBottom] = useState(screenHeight/ 2)
  const [obstacleLeft , setObstaclesLeft] = useState(screenWidth)
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth /2 +30)
  const [obstaclesNegHeight , setobstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo , setobstaclesNegHeightTwo] = useState(0)
  const [isGameOver , setIsGameOver] =useState(false)
  const [score ,SetScore] =useState( 0 )
  const gravity = 3
  let obstacleWidth =60
  let obstacleHeight=300
  let gap = 200
  let gameTimerId
  let obstaclesTimerId

  

  useEffect(()=>{
    if(birdBottom>0){
      gameTimerId =setInterval (()=> 
      {
        setBirdBottom(birdBottom=> birdBottom-gravity)
      },30)
      return () => {
        clearInterval (gameTimerId)
      }
    }
  },[birdBottom])

  useEffect(()=> {
    if(obstacleLeft >-60){
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft (obstacleLeft => obstacleLeft - 5)
      }, 30)
      return() => {
        clearInterval(obstaclesTimerId)
      }
    }else { 
      SetScore(score=> score +1)
      setObstaclesLeft(screenWidth)
      setobstaclesNegHeight(-Math.random()*100)
    }
  },[obstacleLeft] )

 useEffect(()=> {
  if(obstaclesLeftTwo >-60){
    obstaclesTimerId =setInterval(() => {
      setObstaclesLeftTwo(obstaclesLeftTwo =>obstaclesLeftTwo - 5)
    }, 30)
    return() => {
      clearInterval(obstaclesTimerId)
    }
  }else {
    SetScore( score =>score +1)
    setObstaclesLeftTwo(screenWidth)
    setobstaclesNegHeight(-Math.random() * 100)
  }
 },[obstaclesLeftTwo])


 const jump = () => {
  if(!isGameOver && (birdBottom < screenHeight)){
    setBirdBottom(birdBottom => birdBottom +50)
    console.log('jumped')
  }
 }

 useEffect(() => {
  if(
    ((birdBottom< (obstaclesNegHeight +obstacleHeight+ 30) || birdBottom> (obstaclesNegHeight + obstacleHeight + gap -30))&& ( obstacleLeft >screenWidth/2 - 30 && obstaclesLeftTwo < screenWidth/2 +30))){
      GameOver()
    }
 })

const GameOver= () => {
  clearInterval(gameTimerId)
  clearInterval(obstaclesTimerId)
  clearInterval(obstaclesTimerIdTwo)
}

return (
  <TouchableWithoutFeedback onPress={jump}>
    <View style ={styles.container}>
      <Image source={require('./assets/background.png')} style={styles.backgroundImage}/>
      <Text style={styles.score}>Score:{score}</Text>
      <Bird
      birdBottom={birdBottom}
      birdLeft={birdLeft}/>
      <Obstacles
      color={"green"}
      obstacleWidth={obstacleWidth}
      obstacleHeight={obstacleHeight}
      randomBottom={obstaclesNegHeight}
      gap={gap}
      obstacleLeft={obstacleLeft}/>
      <Obstacles
      color={"yellow"}
      obstacleWidth={obstacleWidth}
      obstacleHeight={obstacleHeight}
      randomBottom={obstaclesNegHeightTwo}
      gap={gap}
      obstacleLeft={obstacleLeft}/>

    </View>

  </TouchableWithoutFeedback>
);


}

const styles =StyleSheet.create ({
  container : {
    flex:1,
    backgroundColor:'#ffff',
    alignItems:'center',
    justifyContent:'center',
  },

  score: {
    fontSize:32,
    top:50,
    position:'absolute',
    zIndex:1,
    color:'white'
  },
  backgroundImage:{
    position:'absolute',
    top:0,
    bottom:0,
    left :0,
    right: 0
  }
})


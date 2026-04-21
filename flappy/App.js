import React,{ useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback,Image } from 'react-native';
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
  
}



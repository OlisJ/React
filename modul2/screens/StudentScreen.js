import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import StudentDetails from '../components/StudentDetails';

const TestScreen = () => { 
    return(
        <View>
            <Text style={styles.textStyle}>This is the Students Screen</Text>
            <StudentDetails name="John Doe" description="A passionate student interested in web development." image={require('../assets/student1.jpg')}/>
            <StudentDetails name="Jane Smith" description="An enthusiastic learner pursuing computer science." image={require('../assets/student2.jpg')}/>
            <StudentDetails name="Bob Johnson" description="A dedicated student working on mobile app development." image={require('../assets/student3.jpg')}/>
        </View>
    )
 }

 const styles =StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20,
    }
 });

 export default TestScreen;
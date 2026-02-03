import React from 'react';
import { View, Text, Button, StyleSheet , TouchableOpacity } from 'react-native-web';

const ButtonScreen = () => {
    let counter , counterT = 0;
    return (
        <View>
            <Text>Button Screen</Text>
            <Button title="Qlik Me" color="blue"
            onPress={() => console.log('Button Clicked!', counter++)}></Button>
            <TouchableOpacity title="Click" style={styles.btnStyle} 
            onPress={()=> console.log('Touchable Opacity Clicked!', counterT++)}><Text style={styles.btnText}>Touchable Opacity</Text>
                
            </TouchableOpacity>
            
        </View>) }

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        margintop: 20,
        fontsize: 30,
        marginbotoom: 20 },
    btnStyle: {
        backgroundColor: 'purple',
        marginvertical: 10,
        paddingVertical: 10,
        borderRadius: 5,
        marginHorizontal: 20 },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold' } });

export default ButtonScreen;
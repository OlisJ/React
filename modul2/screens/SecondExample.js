import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";


const vegtables= [
    { name: 'Potatoe',  price:1.99 },
    { name: 'Pepper',  price:0.99 },
    { name: 'Lettuce',  price:2.49 }
];  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333'
    },
    flatlist: {
        flex: 1
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50'
    },
    itemText: {
        fontSize: 16,
        color: '#333'
    }
});

const SecondExample = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>List of vegtables</Text>
            <FlatList
            style={styles.flatlist}
            data={vegtables }
            renderItem={({item})=>{
                return <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>{item.name}  Price: ${item.price}</Text>
                </View>
            } } />
        </View>
    );
};

export default SecondExample;
            
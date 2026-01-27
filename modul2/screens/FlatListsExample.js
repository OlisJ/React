import React from "react";
import { View, Text, FlatList } from "react-native";


const students = [
    { name: 'Olis', surname:"Jashari", age:19 },
    { name: 'Usame', surname:"Mjekiqi", age:17 },
    { name: 'Leart ', surname:"Obertinca", age:17 }
];  


const FlatListsExample = () => {
    return (
        <View>
            <Text>List of Students</Text>
            <FlatList
            
            
            data={students}
            renderItem={({item})=>{
                return <View>
                    <Text>{item.name} {item.surname}, Age: {item.age}</Text>
                </View>
            } } />
        </View>
    );}

export default FlatListsExample;
            
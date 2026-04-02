import React from "react";
import { View, FlatList, Text, TouchableOpacity, Button, StyleSheet, Image } from "react-native";
import data from "../data/data.json";
import ProductDetails from "./ProductDetails";

const ProductScreen = () => {

    <View>
        <FlatList
        data={data}
        renderItem={({item}) => {
            return(
                <ProductDetails />
            )
        }}/>
    </View>
};

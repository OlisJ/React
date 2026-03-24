import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ProductScreen = () => {
    const [products, setProducts] = React.useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <View>
            <Text>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={StyleSheet.listContent}
                    renderItem={({item}) => { 
                        return (
                            <View>  
                                <Image source={{uri: item.image}} resizeMode="contain" />
                                <View>
                                    <Text numberOfLines={2}>{item.title}</Text>
                                    <Text>${item.price.toFixed(2)}</Text>
                                </View>
                            </View>
                        );
                        }
                />
            </Text>
        </View>
    );  
};

const styles = StyleSheet.create({ 
    listContent: {
        padding: 10,
    },
});
    
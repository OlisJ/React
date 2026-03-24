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
                    }
                /> 
            </Text>
        </View>
    );  
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header:{
        fontSize: 24,
        fontWeight: 'bold',
        padding: 16,
        paddingTop: 50,
        backgroundColor: '#fff',
     },
    listContent: {
        padding: 12,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 12,
        padding: 12,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
     },
        
        img:{
            width: 80,
            height: 80,
            borderRadius: 8,
        },

        textContainer:{
            flex: 1,
            paddingHorizontal: 12,
            justifyContent: 'center',
        },
        title:{
            fontSize: 14,
            fontWeight: '500',
            color: '#333',
            marginBottom: 6,
        },
        price:{
            fontSize: 16,
            fontWeight: 'bold', 
        } });

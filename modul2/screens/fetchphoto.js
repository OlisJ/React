import React from "react";
import {Text, View, StyleSheet, FlatList, Image, Button} from 'react-native';

class Photos extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: []
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const jsonData = await res.json();
            this.setState({photos: jsonData});
        } catch (error) {
            console.log("fetch error", error);
        }
    }

    render() {
        const {photos} = this.state;
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Photos</Text>

                {/* <View style={styles.navRow}>
                    <Button title="Users" onPress={() => navigation.navigate('Users')} />
                    <Button title="Albums" onPress={() => navigation.navigate('Albums')} />
                    <Button title="Posts" onPress={() => navigation.navigate('Posts')} />
                </View> */}

                <FlatList
                    data={photos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={styles.item}>
                            <Image source={{uri: item.thumbnailUrl}} style={styles.thumbnail} />
                            <View style={styles.textContainer}>
                                <Text style={styles.id}>{item.id}</Text>
                                <Text style={styles.photoTitle}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, backgroundColor: '#f6f7fb'},
    title: {fontSize: 22, marginBottom: 12, fontWeight: '600', color: '#222'},
    navRow: {flexDirection:'row', justifyContent:'space-between', marginBottom:10},
    item: {
        flexDirection: 'row',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 10,
        alignItems: 'center',
        // basic shadow (Android/iOS)
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 4
    },
    thumbnail: {width: 60, height: 60, marginRight: 12, borderRadius: 6},
    textContainer: {flex: 1},
    id: {fontWeight: '700', color: '#333', marginBottom: 4},
    photoTitle: {flexShrink: 1, color: '#444'}
});

export default Photos;

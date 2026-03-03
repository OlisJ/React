import React from "react";
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';

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
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Photos</Text>

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
    container: {flex: 1, padding: 16},
    title: {fontSize: 20, marginBottom: 12},
    item: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        alignItems: 'center'
    },
    thumbnail: {width: 50, height: 50, marginRight: 10},
    textContainer: {flex: 1},
    id: {fontWeight: 'bold'},
    photoTitle: {flexShrink: 1}
});

export default Photos;

import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const StudentInfo = (props) => {
   
    return (
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <Image source={props.image} style={styles.img} />
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.fullname || props.name}</Text>
                    {props.position ? <Text style={styles.position}>{props.position}</Text> : null}
                    {props.description ? <Text style={styles.description}>{props.description}</Text> : null}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        width: '100%'
    },
    cardWrapper: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 12,
        padding: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: 'cover'
    },
    infoWrapper: {
        flex: 1,
        paddingLeft: 12,
        justifyContent: 'center'
    },
    name: {
        fontWeight: '700',
        fontSize: 18,
        color: '#111'
    },
    position: {
        color: '#666',
        fontSize: 14,
        marginTop: 4
    },
    description: {
        marginTop: 8,
        color: '#333'
    }
});


export default StudentInfo;
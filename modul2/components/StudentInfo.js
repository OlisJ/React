import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const StudentInfo = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.avatarWrapper}>
                    <Image source={props.image} style={styles.img} />
                </View>
                <View style={styles.infoWrapper}>
                    <Text style={styles.name}>{props.fullname || props.name}</Text>
                    {props.position ? (
                        <View style={styles.pill}>
                            <Text style={styles.pillText}>{props.position}</Text>
                        </View>
                    ) : null}
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
        borderRadius: 14,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 14,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 4
    },
    avatarWrapper: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#eef2ff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    img: {
        width: 76,
        height: 76,
        borderRadius: 38,
        resizeMode: 'cover',
        borderWidth: 2,
        borderColor: '#eef2ff'
    },
    infoWrapper: {
        flex: 1,
        paddingLeft: 12,
        justifyContent: 'center'
    },
    name: {
        fontWeight: '800',
        fontSize: 20,
        color: '#0f1720'
    },
    pill: {
        marginTop: 6,
        alignSelf: 'flex-start',
        backgroundColor: '#eef2ff',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 999
    },
    pillText: {
        color: '#4f46e5',
        fontSize: 12,
        fontWeight: '600'
    },
    description: {
        marginTop: 10,
        color: '#374151',
        lineHeight: 20
    }
});


export default StudentInfo;
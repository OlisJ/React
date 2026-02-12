import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const Projects = (props) => {
   return (
       <View style={styles.container}>
           <View style={styles.cardWrapper}>
               <Image source={props.image} style={styles.img} />
               <View style={styles.infoWrapper}>
                   <Text style={styles.title}>{props.title || 'Project'}</Text>
                   {props.description ? <Text style={styles.description}>{props.description}</Text> : null}
               </View>
           </View>
       </View>
   );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
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
        shadowOpacity: 0.04,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 1
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 8,
        resizeMode: 'cover'
    },
    imgWrapper: {
        width: 80,
        height: 80,
        overflow: 'hidden',
        borderRadius: 8
    },
    infoWrapper: {
        flex: 1,
        paddingLeft: 12,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        color: '#111'
    },
    description: {
        marginTop: 6,
        color: '#444'
    }
});


export default Projects;
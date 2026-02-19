import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const Projects = (props) => {
   return (
       <View style={styles.container}>
           <View style={styles.cardWrapper}>
               <View style={styles.imgWrapper}>
                   <Image source={props.image} style={styles.img} />
               </View>
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
        borderRadius: 12,
        width: '95%',
        alignSelf: 'center',
        marginBottom: 14,
        padding: 14,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover'
    },
    imgWrapper: {
        width: 92,
        height: 92,
        overflow: 'hidden',
        borderRadius: 12,
        marginRight: 14,
        backgroundColor: '#f8fbff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoWrapper: {
        flex: 1,
        paddingLeft: 12,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '700',
        fontSize: 17,
        color: '#0f1720'
    },
    description: {
        marginTop: 8,
        color: '#6b7280'
    }
});


export default Projects;
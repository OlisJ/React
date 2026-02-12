import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StudentInfo from '../components/StudentInfo';
import Projects from '../components/Projects';

const ProfileScreen = () => {
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: '#f7f8fa' }}
            contentContainerStyle={{ paddingVertical: 24, paddingHorizontal: 12, alignItems: 'center' }}
        >
            <View style={styles.header}>
                <Text style={styles.screenTitle}>Profile</Text>
            </View>

            <StudentInfo
                fullname="John Doe"
                position="Student"
                description="A passionate student interested in web development. Loves building user interfaces and learning new frameworks."
                image={require('../assets/download.jpg')}
            />

            <View style={{ width: '100%', marginTop: 8 }}>
                <Text style={styles.sectionTitle}>Projects</Text>
                <Projects image={require('../assets/projet.jpg')} title={'School Project'} description={'A basic school assignment demonstrating layout.'} />
            </View>
        </ScrollView>
    )
}

 const styles =StyleSheet.create({
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20,
        color: '#111'
    }
 });

export const extraStyles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 8
    },
    screenTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111',
        marginVertical: 12,
        paddingHorizontal: 12
    }
});

export default ProfileScreen;
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StudentInfo from '../components/StudentInfo';
import Projects from '../components/Projects';

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.headerCard}>
                <View style={styles.headerLeftAccent} />
                <View style={styles.headerContent}>
                    <Text style={styles.screenTitle}>Profile</Text>
                    <Text style={styles.screenSubtitle}>Overview of personal info and recent work</Text>
                </View>
            </View>

            <StudentInfo
                fullname="John Doe"
                position="Student"
                description="A passionate student focused on web and mobile development. Skilled at building clean UI and learning modern frameworks."
                image={require('../assets/download.jpg')}
            />

            <View style={styles.sectionWrapper}>
                <Text style={styles.sectionTitle}>Projects</Text>
                <Projects
                    image={require('../assets/projet.jpg')}
                    title={'School Project'}
                    description={'A concise project showcasing layout, responsive design and basic interactivity.'}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f8'
    },
    contentContainer: {
        paddingVertical: 28,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    header: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 12,
        paddingHorizontal: 8
    },
    headerCard: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3
    },
    headerLeftAccent: {
        width: 6,
        height: 48,
        backgroundColor: '#4f46e5',
        borderRadius: 4,
        marginRight: 12
    },
    headerContent: {
        flex: 1
    },
    screenTitle: {
        fontSize: 26,
        fontWeight: '700',
        color: '#0f1720'
    },
    screenSubtitle: {
        marginTop: 6,
        fontSize: 13,
        color: '#6b7280'
    },
    sectionWrapper: {
        width: '100%',
        marginTop: 12,
        paddingHorizontal: 8
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0f1720',
        marginBottom: 8
    }
});

export default ProfileScreen;
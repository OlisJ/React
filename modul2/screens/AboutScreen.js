import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>About Fetch Navigator</Text>
    <Text style={styles.text}>
      This app demonstrates navigation with drawers, tabs, and a slider screen.
      Use the left drawer to open Albums, Photos, Posts, or return to the home hub.
    </Text>
    <Text style={styles.text}>
      The data screens use fetch calls to the JSONPlaceholder API for sample albums,
      photos, and posts.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1d4ed8',
    marginBottom: 18,
  },
  text: {
    fontSize: 16,
    color: '#334155',
    lineHeight: 24,
    marginBottom: 12,
  },
});

export default AboutScreen;

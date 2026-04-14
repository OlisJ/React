import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const parent = navigation.getParent()?.getParent?.() || navigation.getParent();
  const openDrawer = () => parent?.toggleDrawer?.();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Fetch Navigator</Text>
      <Text style={styles.subtitle}>
        Browse albums, photos, and users with drawer and tab navigation.
      </Text>

      <View style={styles.buttonRow}>
        <Pressable style={styles.card} onPress={() => parent?.navigate('Albums')}>
          <Ionicons name="albums" size={32} color="#4287f5" />
          <Text style={styles.cardText}>Albums</Text>
        </Pressable>
        <Pressable style={styles.card} onPress={() => parent?.navigate('Photos')}>
          <Ionicons name="images" size={32} color="#34a853" />
          <Text style={styles.cardText}>Photos</Text>
        </Pressable>
      </View>

      <View style={styles.buttonRow}>
        <Pressable style={styles.card} onPress={() => parent?.navigate('Users')}>
          <Ionicons name="people" size={32} color="#fbbc05" />
          <Text style={styles.cardText}>Users</Text>
        </Pressable>
        <Pressable style={styles.card} onPress={() => navigation.navigate('Slider')}>
          <Ionicons name="images-outline" size={32} color="#ea4335" />
          <Text style={styles.cardText}>Slider</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fd',
    padding: 18,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#4b5563',
    marginBottom: 22,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    padding: 18,
    borderRadius: 14,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
    textAlign: 'center',
  },

});

export default HomeScreen;

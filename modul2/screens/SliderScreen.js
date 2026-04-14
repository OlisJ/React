import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

const slides = [
  {
    id: '1',
    title: 'Discover Albums',
    description: 'Swipe to preview the photo collection.',
    image: 'https://picsum.photos/800/400?image=1050',
  },
  {
    id: '2',
    title: 'Beautiful Photos',
    description: 'A horizontal slider with remote images.',
    image: 'https://picsum.photos/800/400?image=1043',
  },
  {
    id: '3',
    title: 'Simple UI',
    description: 'Use the drawer to open any fetch screen.',
    image: 'https://picsum.photos/800/400?image=1027',
  },
];

const { width } = Dimensions.get('window');

const SliderScreen = () => (
  <View style={styles.container}>
    <Text style={styles.heading}>Swipe Slider</Text>
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.sliderContainer}
    >
      {slides.map((slide) => (
        <View key={slide.id} style={[styles.slide, { width: width - 32 }]}> 
          <Image source={{ uri: slide.image }} style={styles.image} />
          <Text style={styles.slideTitle}>{slide.title}</Text>
          <Text style={styles.slideDescription}>{slide.description}</Text>
        </View>
      ))}
    </ScrollView>
    <Text style={styles.note}>Use the bottom tabs or side drawer to open Albums, Photos, and Posts.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9ff',
    paddingTop: 18,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 14,
    color: '#111827',
  },
  sliderContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  slide: {
    marginHorizontal: 8,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  slideTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 12,
    marginHorizontal: 14,
    color: '#111827',
  },
  slideDescription: {
    fontSize: 14,
    marginTop: 8,
    marginHorizontal: 14,
    marginBottom: 18,
    color: '#4b5563',
    lineHeight: 20,
  },
  note: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    marginTop: 12,
  },
});

export default SliderScreen;

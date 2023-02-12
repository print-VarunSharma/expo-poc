import * as React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  content: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: "white"
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
  },
});

const ImgMediaCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://edmidentity.com/wp-content/uploads/2019/02/HSMF2018_0804_215631-5140_IME.jpg' }}
        style={styles.media}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Lizard</Text>
        <Text style={styles.description}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImgMediaCard;
import * as React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 300,
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
interface ImgMediaCardProps {
    imgUrl: string;
    title: string
    text: string
  }
    
const ImgMediaCard: React.FC<ImgMediaCardProps> = ({imgUrl, title, text}): JSX.Element => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imgUrl }}
        style={styles.media}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
        {text}
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
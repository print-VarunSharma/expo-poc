import { VStack, Box, Divider } from 'native-base';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import ImgCard from '../components/Cards/ImgCard/ImgCard'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Box borderRadius="md">
        <ImgCard />
   
    </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  content: {
    width: '100%',
    height: '100%',
    padding: 70,
    paddingTop: 100,
  },
  marker: {
    color: 'white',
    position: 'absolute',
    top: 0,
    left: 140,
    fontFamily: 'monospace',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
});

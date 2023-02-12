import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {Center, Image, Heading, VStack } from 'native-base'


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Heading color="white" size="3xl">Welcome to PartyTown</Heading>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Center>
      <Image source={{
      uri: "https://i.ytimg.com/vi/WKuaujIHBT4/maxresdefault.jpg"
    }}  alt="ultra" size="2xl" />
    </Center>
    <Text style={styles.title}>Get personalized concert recommendations</Text>
    <Text style={styles.title}>and stay connected with</Text>
    <Text style={styles.title}>your favorite artists🎉</Text> 


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
});

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import {Center, Image, Heading, VStack, Button, Modal, Text } from 'native-base'
import React, {useState} from 'react';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import PhotoCarousel from '../components/PhotoCarousel/PhotoCarousel';

const imageData = [

  {
    imgUrl: 'https://cloudfronteverfest.qcue.com/uploads/festival_series/hosted_cover_photo/contact-winter-music-festival-vancouver-bc.jpg?v=1641020404',
    title: 'Contact Winter Festival',
  },
  {
    imgUrl: 'https://edmmaniac.com/wp-content/uploads/2022/01/Beyond-Wonderland-At-The-Gorge.jpg',
    title: 'Beyond Wonderland - The Gorge',
  },
  {
    imgUrl: 'https://www.tomorrowland.com/src/Frontend/Themes/tomorrowland/Core/Layout/images/timeline/2022-1.jpg',
    title: 'Tomorrowland',
  },
  {
    imgUrl: 'https://media.resources.festicket.com/www/magazine/ASOTDates_L.jpg',
    title: 'A State of Trance',
  },
  {
    imgUrl: 'https://i.ytimg.com/vi/WKuaujIHBT4/maxresdefault.jpg',
    title: 'Ultra Miami',
  },
  {
    imgUrl: 'https://spice.eplus.jp/images/C6h8elhmvBaduHQZGCzkrfvrOw9YzSXgJ9Sod8wRbdMKCZFGV5usByORJjoHKzKA',
    title: 'Ultra Japan',
  },
  {
    imgUrl: 'https://i.croatiaimages.com/articles/361/festival-of-the-year-in-croatia-ultra-europe-2016-1-l.jpg',
    title: 'Ultra Europe',
  },

  
]
export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
    const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
     
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Center>
      <Heading color="white" size="3xl">InTown</Heading>
      <VStack space={10} justifyContent="center" alignItems="center" safeAreaTop // my={6}
      mb={6}>
   <Text style={styles.title}>Get personalized concert recommendations and stay connected with your favorite artists🎉</Text>
      <PhotoCarousel images={['https://i.ytimg.com/vi/WKuaujIHBT4/maxresdefault.jpg', 'https://cloudfronteverfest.qcue.com/uploads/festival_series/hosted_cover_photo/contact-winter-music-festival-vancouver-bc.jpg?v=1641020404']}/>
        </VStack>
        <Text style={styles.title}>Get personalized concert recommendations</Text>

    </Center>
   
      </ScrollView>
   
    </SafeAreaView>

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
    color: "white"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 25,
    color: "white"
  },
});

import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import {Center, Image, Heading, VStack, Button, Modal } from 'native-base'
import React, {useState} from 'react';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

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
export default function DiscoverScreen({ navigation }: RootTabScreenProps<'Discover'>) {
    const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Heading color="white" size="2xl">Discover Festivals 🎉</Heading>
     
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Center>
      <Text style={styles.title}>Discover</Text>
      <VStack space={10} justifyContent="center" alignItems="center" safeAreaTop // my={6}
      mb={6}>
        
  {imageData.map((item, index) => (
   
   <><Image
      key={index}
      source={{
        uri: item.imgUrl
      }}
        size="2xl"
        alt={item.title}
        resizeMode="cover"
      />
      <Text key={index + item.title} style={styles.title}>{item.title}</Text>
      </>  
  ))}
        </VStack>
    </Center>
    <Button color="blue" onPress={() => setShowModal(true)}>Recommend me More Festivals</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
      _dark: {
        bg: "coolGray.800"
      },
      bg: "warmGray.50"
    }}>
        <Modal.Content maxWidth="350" maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Recommend More Festivals</Modal.Header>
          <Modal.Body>
           This feature is currently under development - we can't wait to recommend you the best possible festivals!
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="green" onPress={() => {
              setShowModal(false);
            }}>
                Close
              </Button>
              <Button onPress={() => {
              setShowModal(false);
            }}>
                Understood!
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
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

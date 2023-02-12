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
import ImgCard from '../components/Cards/ImgCard/ImgCard'

const artistsData = [

  {
    imgUrl: 'https://cdn.albumoftheyear.org/album/541360-heavenly.jpg',
    title: 'HALIENE',
    text:  'Rising from the world of trance and melodic dubstep, HALIENE is defining a new type of artist. Her angelic voice soars through the noise, capturing millions of hearts with her profound lyrics and heavenly melodies.'
  },
  {
    imgUrl: 'https://s3.amazonaws.com/bit-photos/large/10281258.jpeg',
    title: 'Nifra',
    text:  'nifra is a highly acknowledged DJ and considered among the best in Slovakia nifra is performing within the field of Trance music and is ranked 525 on the official DJ rankings list (www.djrankings.org)'
  },
  {
    imgUrl: 'https://ozedm.com/wp-content/uploads/2019/10/armin-van-buuren-balance-2019-oz-edm-feature.jpg',
    title: 'Armin Van Buuren',
    text:  'DJ and producer Armin van Buuren is a born perfectionist. His five-time number one position in the critically acclaimed DJ Mag Top 100 DJs Poll has been the result of his loyalty to fans, his creativity in the studio, the perseverance with which he hosts his weekly radio show ‘A State Of Trance’, and the energy he brings to the crowds in front of him. Despite the heavy pressure that comes along with being one of the world’s most popular DJs, Armin has always kept his focus on the music. And that’s exactly what keeps him going.'
  },
  {
    imgUrl: 'https://static1.squarespace.com/static/501ef093e4b0483765b672bf/t/58da14e7d1758edd5217320a/1490724078818/',
    title: 'Andrew Rayel',
    text:  'He is Andrei Rata, better known as Andrew Rayel. Born on July 21st, 1992, his young age never stopped him from taking the lead amongst the next generation of electronic dance music’s finest Djs'
  },
]
export default function DiscoverScreen({ navigation }: RootTabScreenProps<'Artists'>) {
    const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Heading color="white" size="2xl">Discover Artists 🎤</Heading>
     
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Center>
      <Text style={styles.title}>Artists:</Text>
      <VStack space={10} justifyContent="center" alignItems="center" safeAreaTop // my={6}
      mb={6}>
        
  {artistsData.map((artist, index) => (
   
   <><ImgCard
    imgUrl={artist.imgUrl
    }
    title={artist.title}
    text={artist.text}
      
      />
      <Text key={index + artist.title} style={styles.title}>{artist.title}</Text>
      </>  
  ))}
        </VStack>
    </Center>
    <Button color="blue" onPress={() => setShowModal(true)}>Recommend me More Artists</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} _backdrop={{
      _dark: {
        bg: "coolGray.800"
      },
      bg: "warmGray.50"
    }}>
        <Modal.Content maxWidth="350" maxH="212">
          <Modal.CloseButton />
          <Modal.Header>Recommend More Artists</Modal.Header>
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

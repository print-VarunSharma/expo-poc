import React, { useState, useRef, useEffect } from "react";
import { View, Image, StyleSheet, ScrollView, Dimensions } from "react-native";

interface Props {
  images: string[];
}

const { width } = Dimensions.get("window");

const PhotoCarousel: React.FC<Props> = ({ images }) => {
  const scrollRef = useRef<ScrollView>(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  useEffect(() => {
    const scrollToEnd = () => {
      if (scrollRef.current) {
        setScrollEnabled(true);
        scrollRef.current.scrollTo({ x: width, animated: true });
      }
    };
    const interval = setInterval(scrollToEnd, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView
      horizontal
      pagingEnabled
      ref={scrollRef}
      scrollEnabled={scrollEnabled}
      onMomentumScrollEnd={() => setScrollEnabled(true)}
      style={styles.container}
    >
      {[...images, images[0]].map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: width,
    resizeMode: "contain",
  },
});

export default PhotoCarousel;

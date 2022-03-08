import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";

const HomeSCreenCarousel = (props) => {
  const post = props.post;
  const width = useWindowDimensions().width;

  return (
    <SafeAreaView>
      <View style={[styles.container, { width: width - 140 }]}>
  
          {/* Image */}
          <Image style={styles.image} source={{ uri: post.image }} />

          {/* Type & Description */}
          <Text style={styles.desc}>{post.title}</Text>
        
      </View>
    </SafeAreaView>
  );
};

export default HomeSCreenCarousel;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 5,
    backgroundColor: "white",
    borderRadius: 10,
    
    
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    
  },
  image: {
    width: "100%",
    aspectRatio: 3.5/2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  desc: {
    fontSize: 18,
    lineHeight: 25,
    padding: 20,
    color: "black",
  },
});

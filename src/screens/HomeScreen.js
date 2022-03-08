import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

import homecarouselfeed from "../../assets/data/homecarouselfeed";
import HomeSCreenCarousel from "../components/HomeScreenCarousel";

const HomeScreen = () => {
  const width = useWindowDimensions().width;

  return (
    <ScrollView>
      <SafeAreaView style={{ marginTop: 20 }}>
        <View
          style={{
            height: 240,
            flex: 1,
            backgroundColor: "#000000",
            margin: 20,
            borderRadius: 20,
          }}
        >
          {/* SearchBar */}
          <Pressable
            style={styles.searchbutton}
            onPress={() => navigation.navigate("Destination Search")}
          >
            <Fontisto name="search" size={25} color={"red"} />
            <Text style={styles.searchbuttonText}> Search Location</Text>
          </Pressable>
        </View>

        {/* Inspiration text */}
        <View
          style={{
            marginLeft: 30,
            marginTop: 40,
            marginBottom: 10,
            width: "70%",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 28 }}>
            Inspiration for your next style
          </Text>
        </View>

        {/* HomeSCreenCarousel */}
        <View>
          <FlatList
            data={homecarouselfeed}
            renderItem={({ item }) => <HomeSCreenCarousel post={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width - 140}
            snapToAlignment={"center"}
            decelerationRate={"fast"}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchbutton: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 100,
    height: 50,
    marginHorizontal: 25,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 15,
    zIndex: 100,
  },
  searchbuttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

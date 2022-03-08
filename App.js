import React from "react";
import { StatusBar } from "react-native";
import { View, StyleSheet, Image, Text } from "react-native";
import GuestScreen from "./src/screens/GuestScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LocationSearchScreen from "./src/screens/LocationSearchScreen";
import SearchResultsScreen from "./src/screens/SearchResultsScreen";

export default function App() {
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />
      <HomeScreen />
      {/* <LocationSearchScreen /> */}
      {/* <GuestScreen /> */}

      {/* Fix Below */}
      {/* <SearchResultsScreen /> */}
      {/* <HomeScreenCarousel /> */}
    </View>
  );
}

const styles = StyleSheet.create({});

import React, { useState } from "react";
import { StyleSheet, TextInput, View, FlatList, Text } from "react-native";
import search from "../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const LocationSearchScreen = () => {

  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      {/* Input component */}
      <TextInput
        style={styles.TextInput}
        placeholder="Search Location"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of destination */}
      <FlatList
        data={search}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="dumbbell" size={25} color={"black"} />
            </View>

            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default LocationSearchScreen;

const styles = StyleSheet.create({
  container: { margin: 20 },
  TextInput: {
    fontSize: 18,
    margin: 10,
    marginTop: 50,
  },
  iconContainer: {
    backgroundColor: "#e7e7e7",
    padding: 9,
    borderRadius: 8,
    marginRight: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  locationText: {
    fontSize: 17,
  },
});

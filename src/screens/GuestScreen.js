import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from "react-native";

const GuestScreen = () => {
  return (
    <View>
      <View style={styles.GuestScreen__StatusBarpadding}></View>

      <View style={styles.GuestScreen__Background}>
        <Text style={styles.GuestScreen__Title}>
          Which gender are you looking for?
        </Text>
      </View>

      <View style={styles.GuestScreen__Card}>
        <View style={styles.GuestScreen__CardLine}>
          <View style={styles.GuestScreen__CardLineDash}></View>
        </View>
        <View style={styles.GuestScreen__CardTitle}>
          <View style={styles.GuestScreen__CardBackIcon}></View>
          <Text style={styles.GuestScreen__CardGenderTitle}>Gender</Text>
        </View>

        <View style={styles.GuestScreen__MainCard}>
          <View elevation={5} style={styles.GuestScreen__CardMale}>
            <View style={styles.GuestScreen__CardMaleText}>
              <Text style={{ fontWeight: "bold", fontSize: 16, }}>Male</Text>
              <Text style={{fontSize: 16,}}>
                Looking for <Text style={{ fontWeight: "bold", fontSize: 16, }}>Male</Text>{" "}
                salon
              </Text>
            </View>

            <Image
              style={styles.GuestScreen__CardImageone}
              source={require("../../assets/images/as.jpg")}
            />
          </View>
          <View elevation={5} style={styles.GuestScreen__CardFemale}>
            <View style={styles.GuestScreen__CardFemaleText}>
              <Text style={{ fontWeight: "bold", fontSize: 16, }}>Female</Text>
              <Text style={{fontSize: 16,}}>
                Looking for <Text style={{ fontWeight: "bold", fontSize: 16, }}>Female</Text>{" "}
                salon
              </Text>
            </View>
            <Image
              style={styles.GuestScreen__CardImageone}
              source={require("../../assets/images/as.jpg")}
            />
          </View>
          <View elevation={5} style={styles.GuestScreen__CardTrans}>
            <View style={styles.GuestScreen__CardFemaleText}>
              <Text style={{ fontWeight: "bold", fontSize: 16, }}>UniSex</Text>
              <Text style={{fontSize: 16,}}>
                Looking for <Text style={{ fontWeight: "bold", fontSize: 16, }}>UniSex</Text>{" "}
                salon
              </Text>
            </View>
            <Image
              style={styles.GuestScreen__CardImageone}
              source={require("../../assets/images/as.jpg")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;

const styles = StyleSheet.create({
  GuestScreen__StatusBarpadding: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  GuestScreen__Background: {
    backgroundColor: "#4286f4",
    height: 250,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  GuestScreen__Title: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 50,
    fontWeight: "bold",
    color: "white",
    width: "90%",
    lineHeight: 80,
  },
  GuestScreen__CardGenderTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  //   card
  GuestScreen__CardLine: {
    alignItems: "center",
    justifyContent: "center",
  },
  GuestScreen__CardLineDash: {
    marginTop: 10,
    width: 55,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 25,
  },
  GuestScreen__Card: {
    height: "100%",
    position: "relative",
    bottom: 35,
    backgroundColor: "white",
    borderRadius: 25,
  },
  GuestScreen__CardTitle: {
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  GuestScreen__MainCard: {
    justifyContent: "center",
    alignItems: "center",
  },
  GuestScreen__CardMale: {
    marginTop: 30,
    height: 80,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    borderRadius: 15,
  },
  GuestScreen__CardImageone: {
    height: "90%",
    width: "10%",
    resizeMode: "contain",
    borderRadius: 5,
  },
  GuestScreen__CardFemale: {
    marginTop: 30,
    height: 80,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    borderRadius: 15,
  },
  GuestScreen__CardTrans: {
    marginTop: 30,
    height: 80,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    borderRadius: 15,
  },
});

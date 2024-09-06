import { useNavigation } from "@react-navigation/native";
import React, { Component, useLayoutEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";
// import { HeroImage } from "../assets";
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.homeScreen}>
      {/* First Section  */}
      <View style={styles.homeHeader}>
        <View style={styles.headerBtn}>
          <Text style={styles.headerBtnText}>Let's</Text>
        </View>
        <Text style={styles.headerText}>Travel</Text>
      </View>
      {/* Second Section */}
      <View style={styles.homeDescription}>
        <Text style={styles.descriptionHeading}>Enjoy the trip with</Text>
        <Text style={styles.descriptionSecondaryHeading}>good moments</Text>
        <Text style={styles.descriptionPara}>
          Create unforgettable memories as you explore and enjoy every moment of
          your trip.
        </Text>
      </View>
      {/* Circle Section */}
      <View style={styles.HomeCircle1}></View>
      <View style={styles.HomeCircle2}></View>
      <View style={styles.homeImageContainer}>
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          style={styles.HomeImg}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          style={styles.bottomButton}
        >
          <Animatable.View
            animation={"pulse"}
            iterationCount={"infinite"}
            easing="ease-in-out"
            style={styles.bottomButtonInner}
          >
            <Text style={styles.bottomButtonText}>Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    flex: "1",
    backgroundColor: "white",
    position: "relative",
  },
  text: {
    fontSize: 16,
  },
  homeHeader: {
    flexDirection: "row",
    paddingHorizontal: 32,
    gap: 12,
    alignItems: "center",
    paddingVertical: 30,
  },
  headerBtn: {
    width: 70,
    height: 70,
    justifyContent: "center",
    display: "flex",
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "black",
  },

  headerBtnText: {
    color: "#00bcc9",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerText: {
    color: "#2a2b4b",
    fontSize: 24,
    fontWeight: "bold",
  },
  homeDescription: {
    flexDirection: "column",
    paddingHorizontal: 32,
    gap: 12,
    paddingVertical: 30,
  },
  descriptionHeading: {
    fontSize: 38,
    fontWeight: "semibold",

    // textTransform: "capitalize",
    color: "#3c6072",
  },
  descriptionSecondaryHeading: {
    fontSize: 32,
    color: "#00bcc9",
    textShadowColor: "rgba(0, 188, 201)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  descriptionPara: {
    fontSize: 16,
    color: "#3c6072",
  },
  HomeCircle1: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 200,
    backgroundColor: "#00bcc9",
    // backgroundColor: "#ffdb58",

    right: -120,
    bottom: 220,
  },
  HomeCircle2: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 200,
    backgroundColor: "#e99265",
    left: -100,
    bottom: 60,
  },
  homeImageContainer: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
  },
  HomeImg: {
    // position: "absolute",
    // bottom: -40,
    width: 400,
    height: 500,
    marginTop: 40,
    objectFit: "cover",
  },
  bottomButton: {
    // padding: 20,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#00bcc9",
    position: "absolute",
    bottom: 120,
    // borderLeftColor:
    borderRadius: 50,
    borderTopWidth: 4,
    borderTopColor: "#00bcc9",
    borderLeftWidth: 2,
    borderLeftColor: "#00bcc9",
    borderRightWidth: 2,
    borderRightColor: "#00bcc9",
  },
  bottomButtonInner: {
    width: 70,
    height: 70,
    backgroundColor: "#00bcc9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  bottomButtonText: {
    color: "white",
    fontSize: 28,
    fontWeight: "semibold",
  },
});

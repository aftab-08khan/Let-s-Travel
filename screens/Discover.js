import { useNavigation } from "@react-navigation/native";
import React, { Component, useLayoutEffect } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Avatar } from "../assets";

const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={styles.DiscoverMain}>
      <View style={styles.DiscoverHeader}>
        <View>
          <Text style={styles.DiscoverHeaderPrimary}> Discover </Text>
          <Text style={styles.DiscoverHeaderSecondary}> the beauty today</Text>
        </View>
        <View style={styles.DiscoverHeaderImgBox}>
          <Image source={Avatar} style={styles.DiscoverHeaderImg} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Discover;
const styles = StyleSheet.create({
  DiscoverMain: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  DiscoverHeader: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  DiscoverHeaderPrimary: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#00bcc9",
  },
  DiscoverHeaderImgBox: {
    width: 50,
    height: 50,
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
    shadowOpacity: 0.25, // Opacity of the shadow
    shadowRadius: 3.84, // Blur radius of the shadow
    elevation: 5, // Elevation for Android shadow
  },

  DiscoverHeaderImg: {
    width: "100%",
    borderRadius: 10,
    height: "100%",
  },
  DiscoverHeaderSecondary: {
    color: "#3c6072",
    fontSize: 32,
  },
});

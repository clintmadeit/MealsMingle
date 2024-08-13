import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Searchbar />
        </View>
        <View style={styles.listSection}>
          <RestaurantInfoCard />
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  listSection: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },
});

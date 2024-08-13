import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import restImage from "../../../../assets/images/rest_01.jpg";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <Card elevation={5}>
      <Card.Cover key={name} source={restImage} style={styles.cover} />
      <Card.Title title={name} style={styles.title} />
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {
    backgroundColor: "white",
    padding: 20,
  },
  title: {
    padding: 16,
  },
});

import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import restImage from "../../../../assets/images/rest_01.jpg";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.md};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const Title = styled.Text`
font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space.md};
  color: ${(props) => props.theme.colors.ui.primary};
`;

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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={restImage} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

import React, { useState } from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List, useTheme } from "react-native-paper";
import { ScrollView } from "react-native";
import { LayoutAnimation, Platform, UIManager } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const RestaurantDetailsScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const theme = useTheme();

  const { restaurant } = route.params;

  const toggleAccordion = (setter, value) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setter(!value);
  };

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          titleStyle={{ fontWeight: "bold" }}
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() =>
            toggleAccordion(setBreakfastExpanded, breakfastExpanded)
          }
          theme={{
            colors: {
              primary: breakfastExpanded ? "goldenrod" : theme.colors.primary,
            },
          }}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          titleStyle={{ fontWeight: "bold" }}
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => toggleAccordion(setLunchExpanded, lunchExpanded)}
          theme={{
            colors: {
              primary: lunchExpanded ? "goldenrod" : theme.colors.primary,
            },
          }}
        >
          <List.Item title="Burger with Fries" />
          <List.Item title="Steak Sandwich" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          titleStyle={{ fontWeight: "bold" }}
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => toggleAccordion(setDinnerExpanded, dinnerExpanded)}
          theme={{
            colors: {
              primary: dinnerExpanded ? "goldenrod" : theme.colors.primary,
            },
          }}
        >
          <List.Item title="Spaghetti Bolognese" />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          titleStyle={{ fontWeight: "bold" }}
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => toggleAccordion(setDrinksExpanded, drinksExpanded)}
          theme={{
            colors: {
              primary: drinksExpanded ? "goldenrod" : theme.colors.primary,
            },
          }}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Soda" />
          <List.Item title="Wine" />
          <List.Item title="Beer" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

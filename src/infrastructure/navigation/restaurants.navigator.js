import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator>
      <RestaurantsStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={() => <Text>Restaurant Details</Text>}
        options={{ headerShown: false }}
      />
    </RestaurantsStack.Navigator>
  );
};

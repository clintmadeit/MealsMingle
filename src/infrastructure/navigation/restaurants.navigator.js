import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantsStack.Screen
        name="RestaurantsList"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
        options={{
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          presentation: "modal",
        }}
      />
    </RestaurantsStack.Navigator>
  );
};

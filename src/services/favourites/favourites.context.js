import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../authentication/auth.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

  // Function to save favourites to AsyncStorage
  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("Error storing favourites:", e);
    }
  };

  // Function to load favourites from AsyncStorage
  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error loading favourites:", e);
    }
  };

  // Function to add a restaurant to favourites
  const add = (restaurant) => {
    setFavourites((prevFavourites) => [...prevFavourites, restaurant]);
  };

  // Function to remove a restaurant from favourites
  const remove = (restaurant) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((x) => x.placeId !== restaurant.placeId)
    );
  };

  // Load favourites when the user changes
  useEffect(() => {
    if (user?.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  // Save favourites when the user or favourites change
  useEffect(() => {
    if (user?.uid) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

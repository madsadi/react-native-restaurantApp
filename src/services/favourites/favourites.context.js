import React, { createContext, useState } from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import { Children } from "react/cjs/react.production.min";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

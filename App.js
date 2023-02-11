import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation/index";

// const firebaseConfig = {
//   apiKey: "AIzaSyAPwc0Y9AuwbVq1h1uBhhajdhOcjnadQo0",
//   authDomain: "mealstogo-c15e4.firebaseapp.com",
//   projectId: "mealstogo-c15e4",
//   storageBucket: "mealstogo-c15e4.appspot.com",
//   messagingSenderId: "1061521650056",
//   appId: "1:1061521650056:web:f26615744b4bbf0c568a3d",
// };

export default function App() {
  let [oswaldLoaded] = useOswald({ Oswald_400Regular });
  let [latoLoade] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoade) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantContextProvider>
              <Navigation />
            </RestaurantContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

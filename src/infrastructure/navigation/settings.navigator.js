import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screen/settings.screen";
import { FavoutitesScreen } from "../../features/settings/screen/favourites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode={"screen"}
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name={"Settings"}
        component={SettingsScreen}
      />
      <SettingsStack.Screen name={"Favourites"} component={FavoutitesScreen} />
    </SettingsStack.Navigator>
  );
};

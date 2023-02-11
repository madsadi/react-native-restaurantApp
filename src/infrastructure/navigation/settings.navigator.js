import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screen/settings.screen";
import { Text } from "react-native";

const SettingsStack = createStackNavigator();

const Fav = () => {
  return <Text>hi</Text>;
};
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
        name={"setting"}
        component={SettingsScreen}
      />
      <SettingsStack.Screen name={"favourites"} component={Fav} />
    </SettingsStack.Navigator>
  );
};

import React from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          left={(props) => (
            <List.Icon {...props} color={"black"} icon={"heart"} />
          )}
          title={"Favourites"}
          description={"view your favourites"}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: 16 }}
          left={(props) => (
            <List.Icon {...props} color={"black"} icon={"door"} />
          )}
          title={"Logout"}
          onPress={() => null}
        />
      </List.Section>
    </SafeArea>
  );
};

import React from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <List.Section>
        <AvatarContainer>
          <Avatar.Icon size={180} icon="human" backgroundColor={"#2182BD"} />
          <Text>test@gmail.com</Text>
        </AvatarContainer>
        <SettingItem
          left={(props) => (
            <List.Icon {...props} color={"black"} icon={"heart"} />
          )}
          title={"Favourites"}
          description={"view your favourites"}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingItem
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

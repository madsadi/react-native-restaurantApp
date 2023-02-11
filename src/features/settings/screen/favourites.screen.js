import React, { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurants-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavoutitesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <>
      {favourites.length ? (
        <SafeArea>
          <RestaurantList
            data={favourites}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <Spacer position={"bottom"} size={"large"}>
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </SafeArea>
      ) : (
        <NoFavouritesArea>
          <Text center>No Favourites</Text>
        </NoFavouritesArea>
      )}
    </>
  );
};

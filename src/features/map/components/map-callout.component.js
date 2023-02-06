import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.compnent";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap restaurant={restaurant} />;
};

import React from "react";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.compnent";

export const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};

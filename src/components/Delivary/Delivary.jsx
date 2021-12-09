import React from "react";
import Explore from "../common/ExploreSection/Explore";
import Filters from "../common/Filters/Filters";
import "./delivary.css";
import DelivaryCollection from "./DeliveryCollections/DelivaryCollection";
import TopBrands from "./TopBrands/TopBrands";
import { restaurants } from "../../data/restaurants";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const Delivary = () => {
  return (
    <>
      <div className="max-width">
        <Filters filterlist={deliveryFilters} />
      </div>
      <DelivaryCollection />
      <TopBrands />
      <Explore  list={restaurants} collectionName ='Delivery Restaurants in Bangalore' />
    </>
  );
};

export default Delivary;

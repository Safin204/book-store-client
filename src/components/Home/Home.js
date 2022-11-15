/** @format */

import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BookRequest from "../BookRequest/BookRequest";
import InventoryItem from "../InventoryItem/InventoryItem";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
    <Banner></Banner>
    <InventoryItem></InventoryItem>
    <Service></Service>
    <BookRequest></BookRequest>
  
      <Helmet>
        <title>home</title>
      </Helmet>
    </div>
  );
};

export default Home;

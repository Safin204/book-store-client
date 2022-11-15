/** @format */

import React from "react";
import ServicesCard from "./ServicesCard/ServicesCard";

const Service = () => {
  return (
    <div  className=" services py-5 bg-white">
      <h3 className="text-center py-3 fw-bold text-center  ">Our Service</h3>
      <ServicesCard></ServicesCard>
    </div>
  );
};

export default Service;

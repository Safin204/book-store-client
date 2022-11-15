/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {useEffect} from "react";
// ..

const Card = (props) => {

  useEffect(()=>{
    AOS.init({duration:1000});
  },[])
  const { name, description, img, price, _id, quantity, publisher } =
    props.card;
  // console.log();
  const navigate = useNavigate();
  return <div className="col ">

    <div data-aos="flip-right"  className="card shadow  ">
      <div className="cardImage">
      <img src={img} className="bookCardImage " alt="..." />
      </div>
      <div className="mx-2">
        <h6 className="fw-bold pt-3 ">{name}</h6>
        <h6 className=" p-0 m-0 publisher">Publisher:{publisher}</h6>
        <p className="">
          <h6 className=" pt-1 "> <span className="price">price</span>  :{price}$</h6>
   
          <h6 className=" pt-1 pb-4 m-0 ">
            {quantity<1? "SOLD ":<div> <span className="quantity">quantity</span> :{quantity}</div>}
            </h6>
        </p>
        <p className="text-justify">{description.slice(0,80)}...</p>
        <button
          onClick={() => {
            navigate(`/book/${_id}`);
          }}
          className="btn  update-button  rounded"
        >
          Update{" "}
        </button>
      </div>
    </div>
  </div>;
};

export default Card;

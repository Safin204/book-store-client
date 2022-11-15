/** @format */

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../card/Card";
import "./InventoryItem.css";
import spinner from "../../image/spinnergif.gif";
const InventoryItem = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [books, setBooks] = useState([]);
  useEffect(function () {
    fetch("https://assighment11.herokuapp.com/book")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  });

  // console.log(books);

  return (
    <div  className="inventory-item">
      <h3 className="text-center   pt-5 fw-bold">Inventory Item</h3>
      {loading ? (
        <div
          style={{ height: "80vh" }}
          className="d-flex  justify-content-center align-items-center"
        >
          <img src='https://thumbs.gfycat.com/UnsungWindingAsp.webp' alt="" style={{ width: "200px",height:"200px" }} />
        </div>
      ) : (
        <div className="main pb-5  row row-cols-1 row-cols-md-2 gx-4 gx-lg-5 gy-5">
          {books.map((book, index) => (
            <Card card={book} key={index}></Card>
          ))}
        </div>
      )}

      <button
        onClick={() => {
          navigate("/tablemangeinventory");
        }}
        className=" manageButton  btn px-5 py-2 mb-5  d-block mx-auto"
      >
        MANAGE INVENTORY
      </button>
    </div>
  );
};

export default InventoryItem;

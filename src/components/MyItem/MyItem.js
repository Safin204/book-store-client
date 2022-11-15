/** @format */

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from "../card/Card";
import auth from "../firebase.init";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {Helmet} from "react-helmet-async";
import spinner from "../../image/spinnergif.gif";
import axiosPrivate from "../axiosPrivate";
const MyItem = () => {
  const [user] = useAuthState(auth);
  console.log(user.email);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  console.log(books);
  const [loading, setLoading] = useState(true);
  // https://whispering-beyond-20921.herokuapp.com/
  useEffect(
    function () {
      const getItem = async () => {
        const email = user?.email;
        console.log( email)
        const url = `https://whispering-beyond-20921.herokuapp.com/books?email=${email}`;
        try {
          const { data } = await axiosPrivate.get(url);
          setBooks(data);
          setLoading(false);
        } catch (error) {
          console.log(error.message);
          if (error.response.status === 401 || error.response.status === 403) {
            signOut(auth);
            navigate("/login");
          }
        }
      };
      getItem();
    },
    [user]
  );
  return (
    <div>
      <Helmet>
        <title>my-item</title>
      </Helmet>
      <h3 className="myitem fw-bold text-center text-black pb-0 mb-0 pt-4 ">My Item</h3>
      {loading ? (
        <div
          style={{ height: "70vh",marginBottom:"300px" }}
          className="d-flex  justify-content-center align-items-center"
        >
          <img src='https://thumbs.gfycat.com/UnsungWindingAsp.webp' alt="" style={{ width: "200px",height:"200px" }} />
        </div>
      ) : (
        <div className="main pb-2 pt-0 row mt-0  row-cols-1 row-cols-md-2  pb-4   gx-4 gx-lg-5 gy-5">
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

export default MyItem;

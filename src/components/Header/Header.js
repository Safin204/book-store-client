/** @format */

import React, {useEffect, useState} from "react";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";

import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";


const Header = () => {
  const [user] = useAuthState(auth);
  // console.log(user?.email);
  const [requests, setrequests] = useState([]);
  useEffect(
    function () {
      fetch("https://assighment11.herokuapp.com/request")
        .then((res) => res.json())
        .then((data) => setrequests(data));
    },
    [requests]
  );
  const length = requests.length;
  console.log(length);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <header className="  py-2 pt-3">
        <nav className="navbar sticky-top  mx-auto navbar-expand-lg navbar-light  mx-4">
          <div className="container-fluid   ">
            <CustomLink
              className="navbar-brand  d-flex align-items-center"
              to="/logo"
            >
              <h3 className="fw-bold  headerTitle  p-0 m-0">Book Market</h3>
            </CustomLink>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse   navbar-collapse d-lg-flex justify-content-lg-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav   d-flex flex-lg-row flex-column justify-content-center align-items-center">
                <CustomLink
                  className=" active mx-lg-1 p-1 px-3 "
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </CustomLink>
                <CustomLink
                  className="  mx-1 p-1 px-3 "
                  aria-current="page"
                  to={"/myitem"}
                >
                  My Item
                </CustomLink>
                <CustomLink
                  className="     mx-1 p-1 px-3 "
                  aria-current="page"
                  to={"/additem"}
                >
                  Add Item
                </CustomLink>
                <CustomLink
                  className="     mx-1 p-1 px-3 "
                  aria-current="page"
                  to={"/tablemangeinventory"}
                >
                  Manage Item
                </CustomLink>
                {/* <CustomLink className="     mx-1 p-1 px-3" to="/blog">
                  Blog
                </CustomLink> */}
                <CustomLink
                  className="      mx-1 p-1 px-3 position-relative"
                  to="/bookrequest"
                >
                 
                  Request
                </CustomLink>
                {user ? (
                  <button
                    style={{ color: "rgb(113, 198, 235)" }}
                    className="border-0 bg-transparent text-black font-bold mx-1 p-1 px-3 loginButon  "
                    onClick={handleSignOut}
                  >
                    SignOut
                  </button>
                ) : (
                  <CustomLink className="       mx-1 p-1 px-3" to="/login">
                    Login
                  </CustomLink>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

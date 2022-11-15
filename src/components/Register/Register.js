/** @format */

import React, { useState } from "react";
import "./Register.css";
import showPwdImg from "./show-password.svg";
import hidePwdImg from "./hide-password.svg";

import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

// import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import {Helmet} from "react-helmet-async";

const Register = () => {
  const [pwd, setPwd] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  if(loading|| updating){
    return <Loading></Loading>
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.text.value;

    const email = event.target.email.value;
    const password = event.target.pwd.value;
    await createUserWithEmailAndPassword(email, password);
 
    await updateProfile({ displayName: name });
  };

  if (user) {
    navigate("/");
  }
  return (
    <div className="container  mt-4">
      <Helmet>
        <title>register</title>
      </Helmet>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="  mb-5">
            <form
              onSubmit={handleSignUp}
              className=" cardbody-color p-lg-5"
            >
              <div className="text-center">
              <img
                  src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?w=360"
                  className="img-fluid profile-image-pic my-3"
                  
                  alt="profile"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="text"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="User Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="Username"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3 pwd-container w-100">
                <input
                  style={{ width: "100%" }}
                  className="form-control"
                  id="password"
                  name="pwd"
                  placeholder="Enter Password"
                  type={isRevealPwd ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
                <img
                  title={isRevealPwd ? "Hide password" : "Show password"}
                  src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd((prevState) => !prevState)}
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn login btn-color px-5  w-100">
                  Register
                </button>
              </div>
              <div className="text-center mt-2 m-0 mb-5 p-0 d-flex justify-content-center align-items-center">
                <div className="signup text-black">
                  <Link to="/login" className="text-black">Already have an account?</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

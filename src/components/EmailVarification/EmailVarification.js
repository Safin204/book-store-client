/** @format */

import React from "react";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Emailvarification = () => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  return (
    <div
      style={{ height: "80vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h3 className="text-danger">your email is not varified</h3>
      <h4 className="text-info">Please Verify Your Email</h4>
      <button
        className="  border border-info bg-dark text-white mt-4 btn"
        onClick={async () => {
          await sendEmailVerification();

          toast("Sent email");
        }}
      >
        send email varification
      </button>
      <ToastContainer />
    </div>
  );
};

export default Emailvarification;

/** @format */

import React from "react";
import "./BookRequset.css";
const BookRequest = () => {
  const handleRequestSubmit = (event) => {
    event.preventDefault();
    const name = event.target.yourName.value;
    const bookName = event.target.bookName.value;
    const email = event.target.email.value;
    const comment = event.target.comment.value;

    const data = { name, bookName, email, comment };
    const url = "https://assighment11.herokuapp.com/request";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
      });
    event.target.reset();
  };

  return (
    <div>
      <h3 className="  pt-5 fw-bold text-center">Send Book request</h3>
      <form onSubmit={handleRequestSubmit} className="requset-form" action="">
        <input type="text" name="bookName" id="" placeholder="Book Name" />

        <input type="text" name="yourName" id="" placeholder="Your Name" />
        <input type="email" name="email" id="" placeholder="Your Email" />
        <textarea
          className="d-block mx-auto "
          name="comment"
          id=""
          cols="70"
          rows="5"
          placeholder="Text Something"
        ></textarea>
        {/* <input    className="bg-info text-black btn mt-2 input-button   fw-bold" type="submit" value="ADD ITEM" /> */}
        <button
          className="requset-form-button   mt-2 text-center btn"
          type="Submit"
        >
          Send Request
        </button>
      </form>
    </div>
  );
};

export default BookRequest;

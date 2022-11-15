/** @format */

import React from "react";
import "./Banner.css";
import book1 from "../../image/bookedited1.png";

const Banner = () => {
  return (
    <div className="banner ">
      <div
        id="carouselExampleCaptions"
        className="carousel slide banner"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="bg-black"
          ></button>
          <button
            type="button"
            className="bg-black"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item  active">
          <img src="https://compote.slate.com/images/64f54020-be26-4b16-9020-913ceab99a5f.jpeg?width=780&height=520&rect=1560x1040&offset=0x0" className=" image  img-fluid  " alt="..." />
           
          
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
          <img
              src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/09/Book-covers.jpg?fit=1200%2C613&ssl=1&w=640"
              className=" image  img-fluid "
              alt="..."
            /> <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item ">
            <img
              src="https://www.colorlines.com/sites/default/files/styles/article_lead_normal/public/2021-02/CUT_colorlines%20reads%20new%20you%2002022021_0.jpg?itok=K7i_bw9z"
              className="  image img-fluid"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;

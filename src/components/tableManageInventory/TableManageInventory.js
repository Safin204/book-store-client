/** @format */


import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import "./TableManageInventory.css";
import deleteButton from '../../image/whitebutton-removebg-preview.png'
import {Helmet} from "react-helmet-async";
const TableManageInventory = () => {
  const navigate = useNavigate();

  //pagecount mane kotota page/button hobe
  const [pageCount, setPageCount] = useState(0);
  //page mane koto number button/page a click korsi
  const [page, setPage] = useState(0);
  //size mane prottokta page a koita kore dekhabe
  const [size, setSize] = useState(2);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`https://assighment11.herokuapp.com/book?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [page, size]);

  useEffect(() => {
    fetch("https://assighment11.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 2);
        // console.log(pages)
        setPageCount(pages);
      });
  }, []);

  ///////////////
  const handleDeleteButton = (id) => {
    const procced = window.confirm("Are You sure Want to delete this book?");
    if (procced) {
      const url = `https://assighment11.herokuapp.com/book/${id}`;
      fetch(url, {
        method: "DELETE"
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = books.filter((book) => book._id !== id);
          setBooks(remaining);
        });
    }
  };

  return (
    <div style={{marginBottom:"400px",paddingTop:"50px"}} className="d-flex   justify-content-center align-items-center flex-column">
      <table className="tablemanege mx-auto text-black">
        <thead className=" text-white">
          <tr>
            {" "}
            <th>Item</th>
            <th>Product Name</th>
            <th>Publisher</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{book.name}</td>
              <td>{book.publisher}</td>
              <td>{book.quantity}</td>
              <td>{book.price}</td>
              <td
                className="text-primary"
                onClick={() => {
                  navigate(`/book/${book._id}`);
                }}
              >
               <button className="btn shadow "> update</button>
              </td>
              <td>
                <button
                  onClick={() => {
                    handleDeleteButton(book._id);
                  }}
                  className="btn bg-none border-0"
                >
                  <img
                    style={{ width: "25px", color: "white" }}
                    src='https://cdn-icons-png.flaticon.com/512/3096/3096687.png'
                    alt=""
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagination */}
      <div className="pagination mt-4 d-flex justify-content-center align-items-center">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            className={page === number ? "selected" : ""}
            onClick={() => setPage(number)}
          >
            {number + 1}
          </button>
        ))}

        <select onChange={(e) => setSize(e.target.value)}>
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <Helmet>
        <title>manage-item</title>
      </Helmet>
    </div>
  );
};

export default TableManageInventory;

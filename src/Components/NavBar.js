import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.png";
import cart from "../images/cart.png";
import text from "../images/text.png";
import Carousel from "./Carousel";
import Product from "./Product";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { noteContext, textContext } from "../App";
import UpperNav from "./UpperNav";
import userImg from "../images/user.png";
function NavBar() {
  // let userValue=useContext();
  let userSignin = JSON.parse(localStorage.getItem("username"));

  const [login, setLogin] = useState("");

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("username"));
    if (users === null) {
      setLogin("Not Login");
    } else {
      setLogin(users[0].username);
    }
  }, []);

  console.log("USER SIGN IN", userSignin);

  let user = useContext(noteContext);
  let texts = useContext(textContext);
  // Import context values
  let navigate = useNavigate();
  // Cart Handler Function
  const cartHandler = (e) => {
    e.preventDefault();
    // When new user try to open cart page then user have to firstly
    // Create accout(Signup) after user can go on CART page
    let users = JSON.parse(localStorage.getItem("username"));
    if (users === null) {
      alert("Please Create Your Account !!!");
      navigate("/Signup");
    } else {
      navigate("/Cart");
    }
  };
  return (
    <>
      <UpperNav />
      <div className="navbarDiv">
        <ul>
          <li className="imgNav">
            <a class="active" href="/">
              <img className="logoImg" src={logo} alt="" />
            </a>
          </li>
          <li>
            <a className="textNav" href="/About">
              About
            </a>
          </li>
          <li>
            <a className="textNav" href="/Contact">
              Contact
            </a>
          </li>
          <li>
            <a className="textNav" href="Signup">
              Signup
            </a>
          </li>
          <li>
            <a className="textNav" href="Signin">
              Login
            </a>
          </li>
          <center>
            <li>
              <button onClick={cartHandler} className="textNav btnCart">
                <img className="cartImg1 cart" src={cart} alt="" />{" "}
                <span
                  style={{
                    color: "yellow",
                    borderRadius: "15px",
                    fontSize: "large",
                  }}
                >
                  {user.data.length}
                </span>
              </button>
            </li>

            <li className="userLi">
              <div className="userBtn">
                <button onClick={cartHandler} className="textNav btnCart">
                  <img className="cartImg1 cart" src={userImg} alt="" />{" "}
                  <span
                    style={{
                      color: "yellow",
                      borderRadius: "15px",
                      fontSize: "large",
                      marginRight: "2em",
                    }}
                  >
                    {login}
                  </span>
                </button>
              </div>
            </li>
          </center>
        </ul>
        <Carousel />
        <Product />
        <Footer />
      </div>
    </>
  );
}

export default NavBar;

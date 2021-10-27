import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <ul className="online-store">
        <li>
          <h3>Online Store</h3>
        </li>
        <li>
          <a href="#">Men Clothing</a>
        </li>
        <li>
          <a href="#">Women Clothing</a>
        </li>
        <li>
          <a href="#">Men Accessories</a>
        </li>
        <li>
          <a href="#">Women Accessories</a>
        </li>
      </ul>
      <ul className="helpful-links">
        <li>
          <h3>Helpful Links</h3>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul className="patners">
        <li>
          <h3>Patners</h3>
        </li>
        <li>
          <a href="#">Zara</a>
        </li>
        <li>
          <a href="#">Pantaloons</a>
        </li>
        <li>
          <a href="#">Levis</a>
        </li>
        <li>
          <a href="#">Ucb</a>
        </li>
        <li>
          <a href="#">+ Many More</a>
        </li>
      </ul>
      <ul className="address">
        <li>
          <h3>Address</h3>
        </li>
        <li>Building 101</li>
        <li>Central Avenue</li>
        <li>LA - 902722</li>
        <li>United States</li>
      </ul>
    </div>
  );
}

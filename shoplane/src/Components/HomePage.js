import React, { Component } from "react";
import axios from "axios";

import Header from "./Header";
import Card from "./Card";
import Loader from "./Loader";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "./img/96OnkX7.png";
import image2 from "./img/KtGxwnN.png";
import image3 from "./img/sfjg9R8.png";
import image4 from "./img/p0wdadG.png";
import Footer from "./Footer";

class HomePage extends Component {
  state = {
    cardList: [],
    loadingSatus: true,
  };
  componentDidMount() {
    axios
      .get("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((response) => {
        console.log(response.data);
        this.setState({ cardList: response.data, loadingSatus: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const cardListData = this.state.cardList;

    const clothingGrid = cardListData.map((item) => {
      return item.isAccessory ? null : (
        <Card
          key={item.id}
          id={item.id}
          preview={item.preview}
          title={item.name}
          brand={item.brand}
          price={item.price}
        />
      );
    });

    const accessoryGrid = cardListData.map((item) => {
      return item.isAccessory ? (
        <Card
          key={item.id}
          id={item.id}
          preview={item.preview}
          title={item.name}
          brand={item.brand}
          price={item.price}
        />
      ) : null;
    });

    return (
      <div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          <img src={image1} alt="banner1" />
          <img src={image2} alt="banner2" />
          <img src={image3} alt="banner3" />
          <img src={image4} alt="banner4" />
        </Carousel>
        <Header count={localStorage.getItem("cartCount")} />
        <h2 className="sectionHeading">Clothings for Men and Women</h2>
        <div className="cardConatiner">{this.state.loadingSatus ? <Loader /> : clothingGrid}</div>
        <h2 className="sectionHeading">Accessory for Men and Women</h2>
        <div className="cardConatiner">{this.state.loadingSatus ? <Loader /> : accessoryGrid}</div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;

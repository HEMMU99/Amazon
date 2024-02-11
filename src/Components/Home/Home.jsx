import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import p1 from "../../assets/product-1.jpg";
import p2 from "../../assets/product-2.jpg";
import p3 from "../../assets/product-3.jpg";
import p4 from "../../assets/product-4.jpg";
import p5 from "../../assets/product-5.jpg";
import p6 from "../../assets/product-6.jpg";
import amazon_banner from "../../assets/amazon banner.jpg";

const Home = () => {
  return (
    <div className="home">
      <img className="home-banner" src={amazon_banner} alt="" />
      <div className="home-row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={960}
          rating={5}
          image={p1}
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={11230}
          rating={4}
          image={p2}
        />
      </div>

      <div className="home-row">
        <Product
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={8290}
          rating={3}
          image={p3}
        />
        <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={5500}
          rating={5}
          image={p4}
        />
        <Product
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={47200}
          rating={4}
          image={p5}
        />
      </div>
      <div className="home-row">
        <Product
          id="90829332"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={82700}
          rating={4}
          image={p6}
        />
      </div>
    </div>
  );
};

export default Home;

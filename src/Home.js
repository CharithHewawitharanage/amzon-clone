import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg"
          alt=""
        />
        <div className="Home-content">
          <div className="home__row">
            <Product
              id="1231"
              title="Gaming Mouse"
              price={19}
              rating={5}
              image="https://m.media-amazon.com/images/I/61d9C4yCB2L._AC_UY218_.jpg"
            />
            <Product
              id="1232"
              title="Lithium Car Jump Starter"
              price={69}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71mQOH0Jr-L._AC_SL1450_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="1233"
              title="Huawei P40 Pro"
              price={1119.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/610uWzNVzRL._AC_SL1000_.jpg"
            />
            <Product
              id="1234"
              title="Huawei Mate 40 Pro"
              price={1519}
              rating={5}
              image="https://m.media-amazon.com/images/I/71VoCfC9BVL._AC_SS450_.jpg"
            />
            <Product
              id="1235"
              title="Huawei P30 Pro"
              price={899}
              rating={5}
              image="https://m.media-amazon.com/images/I/61XM1qbUPUL._AC_SS450_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="1236"
              title="RGB LEDs Color Changing Lights"
              price={9}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81JRQcZ8NyL._AC_SL1500_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

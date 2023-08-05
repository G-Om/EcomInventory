import { CardComponent } from "../Components/CardComponent";

export const HomePage = () => {
  return (
    <div>
      <section class="carousel" id="home">
        <div className="carousel-text">
          <div class="carousel-gender-text">
            <h6>Women</h6>
          </div>
          <div className="carousel-tag">
            <h1>Slick. Modern. Awesome.</h1>
          </div>
          <div className="carousel-button">
            <a href="">Shop Collection</a>
          </div>
        </div>

        <div class="carousel-image">
          <img class="front" src={"./images/carsousel1-bg.png"} alt="" />
          <img class="back" src={"./images/carousel1.png"} alt="" />
        </div>
      </section>
      <section className="card-tray">
        <div className="card-container">
          <div className="card-inner">
            <div class="tray-heading-cont">
              <div class="widget-container">
                <h6 class="text">Summer Collection</h6>
              </div>
            </div>

            <div class="tray-heading-cont">
              <div class="widget-container-bg">
                <h2>Popular T-Shirts</h2>{" "}
              </div>
            </div>
            {/* Card Tray */}
            <ul className="products column-4">
              <li className="product-card">
                <CardComponent
                  price={"5"}
                  name={"T-Shirt Name 1"}
                  category={"Men"}
                  image={"./images/card1.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"10"}
                  name={"T-Shirt Name 2"}
                  category={"Women"}
                  image={"./images/card2.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"12"}
                  name={"T-Shirt Name 3"}
                  category={"Men"}
                  image={"./images/card3.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"15"}
                  name={"T-Shirt Name 4"}
                  category={"Women"}
                  image={"./images/card4.jpg"}
                ></CardComponent>
              </li>
            </ul>

            {/* <CardComponent price={"5"} name={"T-Shirt 1"} category={"Men"} image={tshirt}></CardComponent> */}
          </div>
        </div>
      </section>

      {/* 2 Big images tray */}
      <section className="tray-big">
        <div className="tray-cont col">
          <div className="bigtray-img row-6">
            <div className="img1-cont">
              <div className="img-padding">
                <a href="#">
                  <img src="./images/collection-02.jpg"></img>
                </a>
              </div>
            </div>
            <div className="category">
              <div className="text-populated">
                <h6>MEN</h6>
              </div>
            </div>
            <div className="widget-heading-outer">
              <div className="heading-container">
                <h2 className="heading">
                  The base collection - Ideal every day.
                </h2>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <div className="text-populated">
                <a href="#">
                  <span class="button-wrapper">
                    <span class="button-text">Shop Now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="bigtray-img row-6">
            <div className="big-img"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

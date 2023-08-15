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
                  price={"15"}
                  name={"T-Shirt Name 1"}
                  category={"Men"}
                  image={"./images/card1.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"18"}
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
                  price={"30"}
                  name={"T-Shirt Name 4"}
                  category={"Women"}
                  image={"./images/card4.jpg"}
                ></CardComponent>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Big Tray */}
      <section className="big-tray">
        <div className="cont">
          <div className="imgcont">
            <div className="cont-inner">
              <div className="img">
                <img src="./images/collection-02.jpg" alt=""></img>
              </div>
              <div className="product-category">MEN</div>
              <div class="widget-container-big">
                <h2 class="heading-title">
                  The base collection - Ideal every day.
                </h2>
              </div>
              <div className="button-cont">
                <a href="#" className="button-link">
                  <span class="button-content-wrapper">
                    <span class="button-text">Shop Now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="imgcont">
            <div className="cont-inner">
              <img src="./images/collection-01.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </section>


      {/* Elementor */}
      <section class="elementor">
        <div class="container-overlay">
          <div class="elementor-background-overlay"></div>
          <div class="elementor-content">
            <div class="elementor-section">
              <div class="elementor-container">
                <div class="elementor-head">
                  <h6 class="head">New Collection</h6>
                </div>
                <div class="elementor-content-bold">
                  <h2 class="content-bold">Be different in your own easy!</h2>
                </div>
                <div class="elementor-content-small">
                  <h4 class="content-small">Find your unique style</h4>
                </div>
                <div class="shop-collection-button">
                  <a href="" class="collection-button">
                    Shop Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-2">
        <div className="elementor2-body">
          <div className="elementor2-image">
            <a href="#">
              <img src="./images/collection-03.jpg"></img>
            </a>
          </div>
          <div className="elementor2-text">
            <div className="elemenotr2-text-gender">
              <h6>Women</h6>
            </div>
            <div className="elementor2-text-boldHeading">
              <h2>Spring Summer Collection</h2>
            </div>
            <div className="elementor2-text-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id
                leo tempor, congue justo at, lobortis orci. Aliquam venenatis
                dui lectus, eu convallis turpis convallis et. Pellentesque
              </p>
            </div>
            <div className="elementor2-text-button">
              <a href="#">See Whole Collection</a>
            </div>
          </div>
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
                <h2>On Sale T-Shirts</h2>{" "}
              </div>
            </div>
            {/* Card Tray */}
            <ul className="products column-4">
              <li className="product-card">
                <CardComponent
                  price={"15"}
                  name={"T-Shirt Name 1"}
                  category={"Men"}
                  image={"./images/card1.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"18"}
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
                  price={"30"}
                  name={"T-Shirt Name 4"}
                  category={"Women"}
                  image={"./images/card4.jpg"}
                ></CardComponent>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <ul id="products">
          <li>
              <img src="./images/men.jpg" alt="men" />
              <a href="">
                <div className="product-button">MEN</div>
              </a>
          </li>
          <li>
              <img src="./images/women.jpg" alt="women" />
              <a href="">
                <div className="product-button">WOMEN</div>
              </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

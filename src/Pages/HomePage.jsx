import { CardComponent } from "../Components/CardComponent";
import tshirt from "../images/Tshirt.jpg";
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carsousel1-bg.png";
export const HomePage = () => {
  return (
    <div>
      <b>Home component</b>
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
          <img class="front" src={carousel2} alt="" />  
          <img class="back" src={carousel1} alt="" />  
        </div>
      </section>

      <CardComponent
        price={"5"}
        name={"T-Shirt 1"}
        category={"Men"}
        image={tshirt}
      ></CardComponent>
    </div>
  );
};

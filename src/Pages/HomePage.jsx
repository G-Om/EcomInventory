import { CardComponent } from "../Components/CardComponent";
 
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
          <img class="front" src={"./images/carsousel1-bg.png"} alt="" />  
          <img class="back" src={"./images/carousel1.png"} alt="" />  
        </div>
      </section>

       
    </div>
  );
};

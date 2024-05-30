import { CardComponent } from "../Components/CardComponent";

export const MenPage = ()=>{

  const product = new Object();
  product.price = "15₹";
  product.name = "White T-Shirt";
  product.category = "Men";
  product.image = "./images/card1.jpg";

  const listOfProducts = [product];


    return (
        <div className="tray">
          <div className="heading">
            <h1>Men</h1>
            <p>Showing all 5 results</p>
          </div>

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
                  price={"12"}
                  name={"T-Shirt Name 3"}
                  category={"Men"}
                  image={"./images/card3.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"12"}
                  name={"T-Shirt Name 3"}
                  category={"Men"}
                  image={"./images/card5.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"12"}
                  name={"T-Shirt Name 3"}
                  category={"Men"}
                  image={"./images/card6.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"12"}
                  name={"T-Shirt Name 3"}
                  category={"Men"}
                  image={"./images/card7.jpg"}
                ></CardComponent>
              </li>
            </ul>
        </div>
    )
};
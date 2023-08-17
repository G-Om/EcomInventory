import { CardComponent } from "../Components/CardComponent";

export const WomenPage = ()=>{

    return (
        <div className="tray">
          <div className="heading">
            <h1>Women</h1>
            <p>Showing all 5 results</p>
          </div>
            <ul className="products column-4">
              <li className="product-card">
                <CardComponent
                  price={"15"}
                  name={"T-Shirt Name 1"}
                  category={"Women"}
                  image={"./images/card8.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"12"}
                  name={"T-Shirt Name 3"}
                  category={"Women"}
                  image={"./images/card9.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"12"}
                  name={"T-Shirt Name 3"}
                  category={"Women"}
                  image={"./images/card10.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"12"}
                  name={"T-Shirt Name 3"}
                  category={"Women"}
                  image={"./images/card11.jpg"}
                ></CardComponent>
              </li>
              <li className="product-card">
                <CardComponent
                  price={"12"}
                  name={"T-Shirt Name 3"}
                  category={"Women"}
                  image={"./images/card12.jpg"}
                ></CardComponent>
              </li>
            </ul>
        </div>
    )
};
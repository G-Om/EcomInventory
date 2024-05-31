import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import card1 from '../images/card1.jpg'
import  blackTshirt from '../images/black tshirt.jpg'
import  orangeTshirt from '../images/orange tshirt.jpg'
import whiteTshirt from '../images/white tshirt.jpg'



export const ProductDescriptionComponent = (data) => {
  //  Define a state variable for the quantity and color selector
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  console.log("Product id " + id)
  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    console.log({
      id: id,
      color: selectedColor,
      quantity: quantity
    });
  };
  // Create functions to handle increment and decrement
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    // Ensure quantity does not go below 1
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [showDivdesc, setShowDivdesc] = useState(false);
  const handleToggledesc = () => {
    setShowDivdesc(!showDivdesc); // Toggle the state (showDiv) on button click
  };
  const [showDivrev, setShowDivrev] = useState(false);
  const handleTogglerev = () => {
    setShowDivrev(!showDivrev); // Toggle the state (showDiv) on button click
  };
 
  


  const productData =  {
    "id": id,
    "name": "Tshirt",
    "price": 1200,
    "quantity": 107,
    "description": "product description",
    "image": null,
    "category" : "Men",
  }

  return (
    <div>
      <div className="product-description">
        <div className="product-description-component">
          <div className="left-product-description">
            <div className="product-desc-gallary-main-image">
              <img src={card1} alt="product main"></img>
            </div>
            <div className="product-image-color-option">
              <img src={blackTshirt} alt="product black "></img>
              <img src={whiteTshirt} alt="product white"></img>
              <img
                src={orangeTshirt}
                alt="product orange"
              ></img>
            </div>
          </div>

          <div className="right-product-description">
            <span class="single-product-category">
              <a href="#" rel="tag">
                {productData.category}
              </a>
            </span>
            <h1 class="product_title entry-title">{productData.name}</h1>
            <p class="price">
              <span class="woocommerce-Price-amount amount">
                {/* BiDirectional isolation */}
                <bdi>
                  {" "}
                  <span class="woocommerce-Price-currencySymbol">{productData.price}</span>
                </bdi>
              </span>
              –
              <span class="woocommerce-Price-amount amount">
                <bdi>
                  <span class="woocommerce-Price-currencySymbol">{productData.price}</span>
                </bdi>
              </span>
              <span class="ast-shipping-text">&amp; Free Shipping</span>
            </p>
            <div className="particular-product-desc">
              <p>
                {productData.description}
              </p>
            </div>
            <div className="color">
              <p>Color</p>
              <div className="color-option">
                <button className="color-black" onClick={() => handleColorSelection('black')}>Black</button>
                <button className="color-orange" onClick={() => handleColorSelection('orange')}>Orange</button>
                <button className="color-white" onClick={() => handleColorSelection('white')}>White</button>
              </div>
            </div>
            <div className="quantity">
              <p>Quantity: {quantity}</p>
              <button onClick={handleIncrement}>+</button>
              <button onClick={handleDecrement}>-</button>
            </div>
            <div className="category-display">
              <span class="posted_in">
                Category:{" "}
                <a href="#" rel="tag">
                  {productData.category}
                </a>
              </span>
            </div>
            <div className="product-addition-cart">
              <button type="submit" className="add-to-cart" onClick={handleAddToCart}>
                Add To Cart
              </button>
            </div>
            <div className="other-information-toggle">
              <div className="description">
              <button onClick={handleToggledesc}>Description</button>
              {/* Conditionally render the div based on the state */}
              {showDivdesc && (
                <div className="toggle-div">
                  {/* Content of the div */}
                  <hr></hr>
                  <div className="about-product">
                    <h6>About The Product</h6>
                    <p>
                      Our T-Shirts are lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                      mattis, pulvinar dapibus leo.
                    </p>
                    <div class="elementor-widget-container">
                      <ul class="elementor-icon-list-items">
                        <li class="elementor-icon-list-item">
                          <span class="elementor-icon-list-text">
                            100% Cotton
                          </span>
                        </li>
                        <li class="elementor-icon-list-item">
                          <span class="elementor-icon-list-text">260gsm</span>
                        </li>
                        <li class="elementor-icon-list-item">
                          <span class="elementor-icon-list-text">
                            Breathable Fabric
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr></hr>

                  <div className="size-fit">
                    <h6>Size & Fit</h6>
                    <ul class="elementor-icon-list-items">
                      <li class="elementor-icon-list-item">
                        <span class="elementor-icon-list-text">
                          Model is wearing size M and is 6'1"{" "}
                        </span>
                      </li>
                      <li class="elementor-icon-list-item">
                        <span class="elementor-icon-list-text">
                          Standard fit for a relaxed, easy feel
                        </span>
                      </li>
                    </ul>
                  </div>
                  <hr></hr>

                  <div className="delivery-return">
                    <h6>Free Delivery & Returns</h6>
                    <p>Free standard delivery on orders over $60.</p>
                    <ul class="elementor-icon-list-items">
                      <li class="elementor-icon-list-item">
                        <span class="elementor-icon-list-text">
                          You can return your order for any reason, free of
                          charge, within 30 days{" "}
                        </span>
                      </li>
                      <li class="elementor-icon-list-item">
                        <span class="elementor-icon-list-text">
                          We also offer a Free-of-Charge shipping label
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              </div>
              
              {/* REVIEW */}
              <div className="reviews">
              <button onClick={handleTogglerev}>Reviews</button>
              {/* Conditionally render the div based on the state */}
              {showDivrev && (
                <div className="toggle-divrev">
                  {/* Content of the div */}
                    <div className="review-form">

                      {/* FORM */}
                    
                    </div>
                   </div>
              )}
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
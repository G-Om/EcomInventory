import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';

export const NavbarComponent = () => {

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate('/cart');  // Replace '/cart' with the actual route to your cart component
  };

  return (
    <div>
      <header>
        <nav>
          <ul id="hero">
            <li>
              <a href="/">BUY T-SHIRTS</a>
            </li>
            <li>
              <a href="/women">WOMEN</a>
            </li>
            <li>
              <a href="/men">MEN</a>
            </li>
            <li>
              <a href="/about">ABOUT</a>
            </li>
            <li>
              <a href="/profile">PROFILE</a>
            </li>
            <li>
              <a href="/dashboard">DASHBOARD</a>
            </li>
          </ul>
        </nav>
        <div id="logo">
          <a href="/">  
            <img src="./images/logo-regular.png" alt="logo" />
          </a>
        </div>
        <div id="cart-logo">
        <div onClick={handleCartClick}>
          <GiShoppingCart size="30px"/>
          </div>
          <a href="/login">Login/Signup</a>
        </div>
      </header>
    </div>
  );
};
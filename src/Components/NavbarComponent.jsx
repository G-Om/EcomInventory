import { GiShoppingCart } from "react-icons/gi";


export const NavbarComponent = () => {
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
          <GiShoppingCart size="30px"/>
          <a href="/login">Login/Signup</a>
        </div>
      </header>
    </div>
  );
};

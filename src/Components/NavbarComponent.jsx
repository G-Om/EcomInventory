import { GiShoppingCart } from "react-icons/gi";


export const NavbarComponent = () => {
  return (
    <div>
      <header>
        <nav>
          <ul id="hero">
            <li>
              <a href="">BUY T-SHIRTS</a>
            </li>
            <li>
              <a href="">WOMEN</a>
            </li>
            <li>
              <a href="">MEN</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
          </ul>
        </nav>
        <div id="logo">
          <img src="./images/logo-regular.png" alt="logo" />
        </div>
        <div id="cart-logo">
          <GiShoppingCart size="30px"/>
          <a href="">Log In</a>
        </div>
      </header>
    </div>
  );
};

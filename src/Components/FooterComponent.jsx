

export const FooterComponent = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footercontent">
          <div className="subscribe">
            <h3 className="heading">Subscribe to get offer in your inbox </h3>
            <p className="discription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur aperiam nisi error 
            </p>
            <div className="subscribeInput">
              <form>
                <input type="text" className="inputText" placeholder="Your Email Address..."></input>
                <input type="submit" className="submit-btn" value="Subscribe"></input>
              </form>
            </div>
            <div className="nav-elements-list">
              <ul className="navElements">
                <a href="#"><li>Buy T-Shirts</li></a>
                <a href="#"><li>Men</li></a>
                <a href="#"><li>Women</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"> <li>contact</li></a>
              </ul>
            </div>
            <div className="socail-media-handles">
              <a href="#" target="_blank">
                <img src={'./images/fb-icon.png'} alt=""></img>
              </a>
              <a href="#" target="_blank">
                <img src={'./images/instagram-icon.png'} alt=""></img>
              </a>
              <a href="#" target="_blank">
                <img src={'./images/twitter-icon.png' } alt=""></img>
              </a>
            </div>
            <div className="copyright-content">
              <p>Copyright @ 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

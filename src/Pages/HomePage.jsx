import { CardComponent } from "../Components/CardComponent"


export const HomePage = ()=>{
    return(
        <div>
            <b>Home component</b>
            <section className="card-tray">
                <div className="card-container">
                        <div className="card-inner">

                            <div class="tray-heading-cont" >
                                <div class="widget-container">
                                    <h6 class="text">Summer Collection</h6>
                                </div>
                            </div>

                            <div class="tray-heading-cont">
                                <div class="widget-container-bg">
                                <h2 >Popular T-Shirts</h2> </div>
                            </div>
                            {/* Card Tray */}
                            <ul className="products column-4">
                                <li className="product-card">
                                    <CardComponent price={"5"} name={"T-Shirt Name 1"} category={"Men"} image={"./images/card1.jpg"}></CardComponent>
                                </li>
                                <li className="product-card">
                                    <CardComponent price={"10"} name={"T-Shirt Name 2"} category={"Women"} image={"./images/card2.jpg"}></CardComponent>
                                </li>
                                <li className="product-card">
                                    <CardComponent price={"12"} name={"T-Shirt Name 3"} category={"Men"} image={"./images/card3.jpg"}></CardComponent>
                                </li>
                                <li className="product-card">
                                    <CardComponent price={"15"} name={"T-Shirt Name 4"} category={"Women"} image={"./images/card4.jpg"}></CardComponent>
                                </li>
                            </ul>    

                            {/* <CardComponent price={"5"} name={"T-Shirt 1"} category={"Men"} image={tshirt}></CardComponent> */}
                        </div>
                </div>
            </section>
        </div>
    )
}
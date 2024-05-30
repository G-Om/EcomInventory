
export const CardComponent = (props) => {
    console.log("PROPS  " + JSON.stringify(props))
    return (
        <div className="card-div">
            <div className='card-image-div'>
                <img className="card-img" src={props.image} alt="Card_cap"></img>
            </div>  
            <div class="card-textbox"> 
                <span className="product-category">{props.category} </span>
                <a href="https://websitedemos.net/t-shirts-store-04/product/t-shirt-name-8/" class="product-link">
                    <h2 className="product-title">{props.name}</h2>
                </a>
                <span className="price">
                    <span className="woocommerce-Price-amount amount">
                        <bdi><span className="woocommerce-Price-currencySymbol">$  </span>{props.price}</bdi></span></span>
            </div>
        </div>
    )
};

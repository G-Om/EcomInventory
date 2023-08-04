
export const CardComponent = ({image, category, name, price}) => {
    return (
        <div class="card-div">
            <div className='card-image-div'>
                <img class="card-img" src={image} alt="Card image cap"></img>
            </div>  
            <div class="card-textbox"> 
                <span class="product-category">{category} </span>
                <a href="https://websitedemos.net/t-shirts-store-04/product/t-shirt-name-8/" class="product-link">
                    <h2 class="product-title">{name}</h2>
                </a>
                <span class="price">
                    <span class="woocommerce-Price-amount amount">
                        <bdi><span class="woocommerce-Price-currencySymbol">$  </span>{price}</bdi></span></span>
            </div>
        </div>
    )
};

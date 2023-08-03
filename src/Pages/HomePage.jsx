import { CardComponent } from "../Components/CardComponent"
import tshirt from '../images/Tshirt.jpg'


export const HomePage = ()=>{
    return(
        <div>
            <b>Home component</b>
            <CardComponent price={"5"} name={"T-Shirt 1"} category={"Men"} image={tshirt}></CardComponent>
        </div>
    )
}
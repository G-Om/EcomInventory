import { FooterComponent } from "./Components/FooterComponent"
import { NavbarComponent } from "./Components/NavbarComponent"
import { HomePage } from "./Pages/HomePage"
import {LoginSignup} from "./Pages/LoginSignup"

export const MainComponent = ()=>{

    return(
        <div>
            <NavbarComponent></NavbarComponent>
            <HomePage></HomePage>
            <FooterComponent></FooterComponent>
            <LoginSignup></LoginSignup>
        </div>
    )
}
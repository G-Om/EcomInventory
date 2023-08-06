import { FooterComponent } from "./Components/FooterComponent"
import { NavbarComponent } from "./Components/NavbarComponent"
import { HomePage } from "./Pages/HomePage"

export const MainComponent = ()=>{

    return(
        <div>
            <NavbarComponent></NavbarComponent>
            <HomePage></HomePage>
            <FooterComponent></FooterComponent>
        </div>
    )
}
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FooterComponent } from "./Components/FooterComponent"
import { NavbarComponent } from "./Components/NavbarComponent"
import { HomePage } from "./Pages/HomePage"
import {LoginSignup} from "./Pages/LoginSignup"
import { AboutPage } from "./Pages/AboutPage"


export const MainComponent = ()=>{

    return(
        <div>
            <NavbarComponent></NavbarComponent>

            {/* Add pages for routing */}
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}/>
                <Route path="login" element={<LoginSignup></LoginSignup>}/>
                <Route path="about" element={<AboutPage></AboutPage>}/>
                
            </Routes>
            <FooterComponent></FooterComponent>
        </div>
    )
}
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FooterComponent } from "./Components/FooterComponent"
import { NavbarComponent } from "./Components/NavbarComponent"
import { HomePage } from "./Pages/HomePage"
import {LoginSignup} from "./Pages/LoginSignup"
import { AboutPage } from "./Pages/AboutPage"
import { MenPage } from "./Pages/MenPage"
import { WomenPage } from "./Pages/WomenPage"
// import { HomeDashboardPage } from "./Pages/HomeDashboardPage"
import { ProductDescriptionComponent } from "./Components/ProductDescriptionComponent"
import { Cart } from "./Components/Cart"


export const MainComponent = ()=>{

    return(
        <div>
            <NavbarComponent></NavbarComponent>

            {/* Add pages for routing */}
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}/>
                <Route path="login" element={<LoginSignup></LoginSignup>}/>
                <Route path="about" element={<AboutPage></AboutPage>}/>
                <Route path="men" element={<MenPage></MenPage>}/>
                <Route path="women" element={<WomenPage></WomenPage>}/>
                {/* <Route path="dashboard" element={<HomeDashboardPage></HomeDashboardPage>}/> */}
                <Route path="/card/:id" element={<ProductDescriptionComponent></ProductDescriptionComponent>} />
                <Route path="/cart" element={<Cart></Cart>} />

            </Routes>
            <FooterComponent></FooterComponent>
        </div>
    )
}
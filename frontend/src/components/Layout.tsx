import { Outlet } from 'react-router-dom';
import Navigation from "./Navigation.tsx";
import Footer from "./Footer.tsx";
import "../assets/Layout.css";

function Layout() {
    return (
        <div id={ "layout" }>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;
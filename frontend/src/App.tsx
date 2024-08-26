import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
import Navigation from "./components/Navigation.tsx";
import Footer from "./components/Footer.tsx";

const Home = lazy(() => import("pages/Home.tsx"));
const Login = lazy(() => import("pages/Login.tsx"));
const Register = lazy(() => import("pages/Register.tsx"));
const PetPage = lazy(() => import("./pages/PetPage.tsx"));
const PetList = lazy(() => import("./pages/PetList.tsx"));

function App() {

    return (
        <>
            <Router>
                <Navigation/>
                <Suspense fallback={ <Spinner/> }>
                    <Routes>
                        <Route path="/" element={ <Home/> }/>
                        <Route path="/login" element={ <Login/> }/>
                        <Route path="/register" element={ <Register/> }/>
                        <Route path="/pets/:id" element={ <PetPage/> }/>
                        <Route path="/pets" element={ <PetList/> }/>
                        <Route path="*" element={ <Navigate to="/"/> }/>
                    </Routes>
                </Suspense>
                <Footer/>
            </Router>
        </>
    )
}

export default App

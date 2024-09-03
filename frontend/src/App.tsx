import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spinner } from "@chakra-ui/react";

const AdminLogin = lazy(() => import("pages/AdminLogin.tsx"));
const Layout = lazy(() => import("./components/Layout.tsx"));
const Home = lazy(() => import("pages/Home.tsx"));
const Login = lazy(() => import("pages/Login.tsx"));
const Register = lazy(() => import("pages/Register.tsx"));
const PetPage = lazy(() => import("./pages/PetPage.tsx"));
const PetList = lazy(() => import("./pages/PetList.tsx"));

function App() {

    return (
        <>
            <Router>
                <Suspense fallback={ <Spinner/> }>
                    <Routes>
                        <Route path="/" element={ <Layout/> }>
                            <Route index element={ <Home/> }/>
                            <Route path="/login" element={ <Login/> }/>
                            <Route path="/register" element={ <Register/> }/>
                            <Route path="/admin-login" element={ <AdminLogin/> }/>
                            <Route path="/pets/:id" element={ <PetPage/> }/>
                            <Route path="/pets" element={ <PetList/> }/>
                            <Route path="*" element={ <Navigate to="/"/> }/>
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </>
    )
}

export default App

import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import { lazy, Suspense } from "react";

const CenteredSpinner = lazy(() => import("components/CenteredSpinner.tsx"));
const AdminLogin = lazy(() => import("pages/AdminLogin.tsx"));
const Layout = lazy(() => import("components/Layout.tsx"));
const Home = lazy(() => import("pages/Home.tsx"));
const Login = lazy(() => import("pages/Login.tsx"));
const Register = lazy(() => import("pages/Register.tsx"));
const PetPage = lazy(() => import("pages/Pet/PetPage.tsx"));
const PetList = lazy(() => import("pages/Pet/PetList.tsx"));
const PetSpeciesList = lazy(() => import("pages/Pet/PetSpeciesList.tsx"));
const RequireAuth = lazy(() => import("components/RequireAuth.tsx"));
const AdoptionList = lazy(() => import("pages/user/adoptionList.tsx"));

function App() {

    return (
        <>
            <Router>
                <Suspense fallback={ <CenteredSpinner/> }>
                    <Routes>
                        <Route path="/" element={ <Layout/> }>
                            <Route index element={ <Home/> }/>
                            <Route path="/login" element={ <Login/> }/>
                            <Route path="/register" element={ <Register/> }/>
                            <Route path="/admin-login" element={ <AdminLogin/> }/>
                            <Route element={ <RequireAuth/> }>
                                <Route path="/pets/:id" element={ <PetPage/> }/>
                                <Route path="/pets/species/:species" element={ <PetSpeciesList/> }/>
                                <Route path="/pets" element={ <PetList/> }/>
                                <Route path="/adoptions" element={ <AdoptionList/> }/>
                            </Route>
                            <Route path="*" element={ <Navigate to="/"/> }/>
                        </Route>
                    </Routes>
                </Suspense>
            </Router>
        </>
    )
}

export default App

import 'App.css';
import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import Home from "pages/Home.tsx";
import Login from "pages/Login.tsx";
import Register from "pages/Register.tsx";
import PetPage from "./pages/PetPage.tsx";
import PetList from "./pages/PetList.tsx";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={ <Register/> }/>
                    <Route path="/pets/:id" element={ <PetPage/> }/>
                    <Route path="/pets" element={ <PetList/> }/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App

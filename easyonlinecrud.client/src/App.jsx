
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navigation from "./components/Navigation";

function App() {

    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="login" element={<Login/>}/>
            </Routes>
            <Routes>
                <Route path="register" element={<Register/>}/>
            </Routes>
           
        </BrowserRouter>
    );
}

export default App;
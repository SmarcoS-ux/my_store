import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Components/Home/home';
import Login from "./Components/Login/login";
import Cadastro_Usuario from './Components/Cadastro_Usuario/cadastro_usuario';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path="login" element={<Login/>}/>
                <Route exact path="cadastro_usuario" element={<Cadastro_Usuario/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

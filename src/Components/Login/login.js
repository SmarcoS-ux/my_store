import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style-login.css";

import Header_Logo from "../Header/Header_Logo/header_logo";
import Termos from "../Termos_uso/termos_uso";

const Login = () => {
    const Olho_Aberto = "/assets/olho.png";
    const Olho_Fechado = "/assets/olho_fechado.png";

    const[icon_olhar_senha, setIconOlharSenha] = useState(Olho_Fechado);

    const Ver_senha = () => {
        let Input_senha = document.getElementById("inp_senha");
        
        if (Input_senha.getAttribute("type") == "password"){
            Input_senha.setAttribute("type", "text");
            setIconOlharSenha(Olho_Aberto);
        } else{
            Input_senha.setAttribute("type", "password");
            setIconOlharSenha(Olho_Fechado);
        }
    }
    
    const Verify_login = () => {

    }

    return (
        <div className="login-main">
            <Header_Logo/>
            <div className="login">
                <form>
                    <div className="inputs_login">
                        <h2 id="title_login">Login</h2>
                        <p>E-mail:</p>
                        <input id="inp_email"  
                            type="email"
                        />
                        <label id="message_email">E-mail obrigatório</label>
                        <p>Senha:</p>
                        <div id="div_inp_senha">
                            <input id="inp_senha" 
                                type="password"
                            />
                            <a onClick={Ver_senha}>
                                <img src={icon_olhar_senha}/>
                            </a>
                        </div>
                        <label id="message_senha">Senha obrigatória</label>
                        <button id="button_entrar" 
                                type="submit"
                                onClick={Verify_login}>
                                Entrar
                        </button>
                        <Link id="esqueceu_senha"><p>Esqueceu a Senha?</p></Link>
                        <p>Não tem cadastro? <Link id="cadastrar">Cadastre-se!</Link></p>
                    </div>
                </form>
                <Termos/>
            </div>
        </div>
    );
}

export default Login;
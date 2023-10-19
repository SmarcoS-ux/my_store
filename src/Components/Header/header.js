import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = (props) => {
   
    return (
        <header className={props.background_header}>
            <div className="area-pesquisa">
                <div className='icons_1'>
                    <Link to="/">
                        <a href="#">
                            <img id="logo" 
                                src="/assets/future.png" 
                                alt="Logo" 
                                title="Logo-Marca"
                            />
                        </a>
                    </Link>
                    <input id="input_pesquisar"
                           type='text' 
                           placeholder='Pesquisar'
                    />
                    <button id="button-search">
                        <img id="img-button" 
                             src="/assets/lupa.png" 
                             alt="Pesquisar" 
                             title="Pesquisar"
                        />
                    </button>
                </div>
            </div>
            <div className='area-user-config'>
                <div className='icons'>
                    <a href="#"
                       onClick={props.Mudar_tema}
                    >
                        <img id="config" 
                             src={props.light_dark_theme} 
                             alt="Config" 
                             title="Configurações"
                        />
                    </a>
                    <a href="#"
                       id="icon_user" 
                    >
                        <img id="img-user" 
                             src="/assets/user_2.png" 
                             alt="Usuário" 
                             title="Usuário"
                        />
                    </a>
                    <div className='popup_login_cadastro'>
                        <p id="message_login">Para visualizar seus pedidos entre na sua conta.</p>
                        <p id="title_popup_login">Já possui um conta?</p>
                        <Link id="link_login" 
                              href="#"
                              to="/login"
                              >Faça Login
                        </Link>
                        <p>ou</p>
                        <a id="link_cadastro" 
                           href="#">Cadastre-se</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
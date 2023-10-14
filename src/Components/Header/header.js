import React from 'react';
import './header.css';

const Header = () => {
    return(
        <header className="header">
            <div className="area-pesquisa">
                <div className='icons_1'>
                    <img id="logo" src="/assets/lista.png" alt="Logo" title="Logo-Marca"/>
                    <input type='text' placeholder='Pesquisar'/>
                    <button><img id="img-button" src="/assets/lupa.png" alt="Pesquisar" title="Pesquisar"/></button>
                </div>
            </div>
            <div className='area-user-config'>
                <div className='icons'>
                    <a href="#"><img id="config" src="/assets/engrenagem.png" alt="Config" title="Configurações"/></a>
                    <a href="#"><img id="img-user" src="/assets/user.png" alt="Usuário" title="Usuário"/></a>
                </div>
            </div>
        </header>
    );
}

export default Header;
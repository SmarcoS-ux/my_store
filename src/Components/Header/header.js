import React from 'react';
import './header.css';

const Header = () => {
    return(
        <header className="header">
            <div className="area-pesquisa">
                <img id="logo" src="/assets/lista.png" alt="Logo" title="Logo-Marca"/>
                <input type='text' placeholder='Pesquisar'/>
                <button><img id="img-button" src="/assets/lupa.png" alt="Pesquisar" title="Pesquisar"/></button>
            </div>
            <div className='area-user-config'>
                <a href="#"><img id="img-user" src="/assets/user.png" alt="Usuário" title="Usuário"/></a>
            </div>
        </header>
    );
}

export default Header;
import React from 'react';
import "./style-cadastro-user.css";

import Header_Logo from "../Header/Header_Logo/header_logo";
import Termos from "../Termos_uso/termos_uso";

const Cadastro_Usuario = () => {
    return (
        <div className='cadastro_user_main'>
            <Header_Logo/>
            <div className='cadastro'>
                <form>
                    <div className='area_cadastro'>
                        <h2 id="title_cadastro_user">Área de Cadastro:</h2>
                        <label>Digite seu nome:</label>
                        <input type="text" 
                            required
                        />
                        <label>Digite seu e-mail:</label>
                        <input type="email" 
                            required
                        />
                        <label>Crie uma senha:</label>
                        <input type="password" 
                            required
                        />
                        <label>Digite a senha novamente:</label>
                        <input type="password" 
                            required
                        />
                        <div className='buttons_cadastro'>
                            <button id="limpar" 
                                    type="reset">
                                    Limpar
                            </button>
                            <button id="cadastrar_user" 
                                    type="submit">
                                    Cadastrar
                            </button>
                        </div>
                    </div>
                </form>
            <Termos/>
            </div>
        </div>
    );
}

export default Cadastro_Usuario;
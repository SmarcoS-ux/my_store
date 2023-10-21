import React from 'react';
import { Link } from "react-router-dom";

import "./style-termos.css";

export default function Termos(){
    return (
        <div className="termos">
            <p>Ao continuar com o acesso você aceita nossos <Link>Termos de Responsabilidade</Link></p>
        </div>
    );
}
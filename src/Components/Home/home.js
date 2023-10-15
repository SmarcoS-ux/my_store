import React from 'react';
import "./home-style.css";

import Header from '../Header/header';
import Footer from '../Footer/footer';

const Home = () => {
    return(
        <main classNam="main">
            <Header/> 
            <div className='banner_principal'>
                <h1>Greeng Store</h1>
                <h3 id="subtitle">A sua loja de Tecnologia</h3>
            </div>
            <div className='introducao'>
                <div id="title-marcas">
                    <h3>Principais marcas</h3>
                    <div id="line"></div>
                    <div className='marcas'>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/nvidia.png" alt="Nvidia" title="Nvidia"/>
                                <p>Nvidia</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/amd.png" alt="Amd" title="Amd"/>
                                <p>AMD</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/apple.jpg" alt="Apple" title="Apple"/>
                                <p>Apple</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/asus.jpg" alt="Asus" title="Asus"/>
                                <p>Asus</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/c3tech.jpg" alt="C3Tech" title="C3Tech"/>
                                <p>C3Tech</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/lg.jpg" alt="LG" title="LG"/>
                                <p>LG</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/microsoft.jpeg" alt="Microsoft" title="Microsoft"/>
                                <p>Microsoft</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/motorola.jpg" alt="Motorola" title="Motorola"/>
                                <p>Motorola</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/positivo.jpg" alt="Positivo" title="Positivo"/>
                                <p>Positivo</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/samsung.jpg" alt="Samsung" title="Samsung"/>
                                <p>Samsung</p>
                            </a>  
                        </div>
                    </div>
                    <div className='area-main'>
                        <div className='filtros'>
                            <div className='filtro'>
                                <h4>Condições:</h4>
                                <label><input type="checkbox"/>Usado</label>
                                <label><input type="checkbox"/>Novo</label>
                            </div>
                            <div className='filtro'>
                                <h4>Preços:</h4>
                                <label><input type="checkbox"/>Até R$ 25,00</label>
                                <label><input type="checkbox"/>De R$ 25,00 à R$ 100,00</label>
                                <label><input type="checkbox"/>De R$ 100,00 à R$ 300,00</label>
                                <label><input type="checkbox"/>De R$ 300,00 à R$ 500,00</label>
                                <label><input type="checkbox"/>De R$ 500,00 à R$ 800,00</label>
                                <label><input type="checkbox"/>De R$ 800,00 à R$ 1.500,00</label>
                                <label><input type="checkbox"/>De R$ 1.500,00 à R$ 3.000,00</label>
                                <label><input type="checkbox"/>Acima de R$ 3.000,000</label>
                            </div>
                            <div className='filtro'>
                                <h4>Tipo de Produto:</h4>
                                <label><input type="checkbox"/>Smartphones</label>
                                <label><input type="checkbox"/>Computadores</label>
                                <label><input type="checkbox"/>Fones de ouvido</label>
                                <label><input type="checkbox"/>Impressoras</label>
                                <label><input type="checkbox"/>Cabos e Adaptadores</label>
                                <label><input type="checkbox"/>Rede e Internet</label>
                            </div>
                        </div>
                        <div className='frete'>
                            <img src="/assets/frete.png" alt="Frete" title="Frete"/>
                            <p>Frete grátis em quase todos os produtos da loja. Aproveite!</p>
                            <p>Nossos produtos são enviados no mesmo dia do pagamento.</p>
                            <p>Enviamos para todo o Brasil e algumas localidades internacionais sem taxa e custos adicionais.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </main>
    );
}

export default Home;
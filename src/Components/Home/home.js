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
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/nvidia.png" alt="Nvidia" title="Nvidia"/>
                                <p>Nvidia</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/amd.png" alt="Amd" title="Amd"/>
                                <p>AMD</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/apple.jpg" alt="Apple" title="Apple"/>
                                <p>Apple</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/asus.jpg" alt="Asus" title="Asus"/>
                                <p>Asus</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/c3tech.jpg" alt="C3Tech" title="C3Tech"/>
                                <p>C3Tech</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/lg.jpg" alt="LG" title="LG"/>
                                <p>LG</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/microsoft.jpeg" alt="Microsoft" title="Microsoft"/>
                                <p>Microsoft</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/motorola.jpg" alt="Motorola" title="Motorola"/>
                                <p>Motorola</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/positivo.jpg" alt="Positivo" title="Positivo"/>
                                <p>Positivo</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className='marca'>
                                <img src="/assets/img-marcas/asus.jpg" alt="Asus" title="Asus"/>
                                <p>Asus</p>
                            </div>
                        </a>    
                    </div>
                </div>
                
            </div>
            <Footer/>
        </main>
    );
}

export default Home;
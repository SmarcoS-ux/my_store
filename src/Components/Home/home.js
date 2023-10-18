import React, {useState} from 'react';
import "./home-style.css";

import Header from '../Header/header';
import Footer from '../Footer/footer';

const Home = () => {
    const Theme_light = "/assets/sol.png";
    const Theme_dark = "/assets/lua.png";

    const[light_dark_theme, setLightDarkTheme] = useState(Theme_light);
    const[background_header, setBackgroundHeader] = useState("header_theme_dark");
    const[theme_home_introducao, setThemeHomeIntroducao] = useState("title-marcas_dark");


    const Mudar_tema = () => {
        if (light_dark_theme == Theme_light){
            setLightDarkTheme(Theme_dark);
            setBackgroundHeader("header_theme_light");
            setThemeHomeIntroducao("title-marcas_light");
        } else{
            setLightDarkTheme(Theme_light);
            setBackgroundHeader("header_theme_dark");
            setThemeHomeIntroducao("title-marcas_dark");
        }
        
    }

    return(
        <main classNam="main">
            <Header light_dark_theme={light_dark_theme}
                    background_header={background_header}
                    theme_home_introducao={theme_home_introducao}
                    setLightDarkTheme={setLightDarkTheme}
                    setBackgroundHeader={setBackgroundHeader}
                    setThemeHomeIntroducao={setThemeHomeIntroducao} 
                    Theme_dark={Theme_dark}
                    Theme_light={Theme_light}
                    Mudar_tema={Mudar_tema}
            /> 
            <div className='banner_principal'>
                <h1>Future Store</h1>
                <h3 id="subtitle">A sua loja de Tecnologia</h3>
            </div>
            <div className='introducao'>
                <div id={theme_home_introducao}>
                    <h3>Principais marcas</h3>
                    <div id="line_dark"></div>
                    <div className='marcas'>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/nvidia.png" 
                                     alt="Nvidia" 
                                     title="Nvidia"
                                />
                                <p>Nvidia</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/amd.png" 
                                     alt="Amd" 
                                     title="Amd"
                                />
                                <p>AMD</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/apple.jpg" 
                                     alt="Apple" 
                                     title="Apple"
                                />
                                <p>Apple</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/asus.jpg" 
                                     alt="Asus" 
                                     title="Asus"
                                />
                                <p>Asus</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/c3tech.jpg" 
                                     alt="C3Tech" 
                                     title="C3Tech"
                                />
                                <p>C3Tech</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/lg.jpg" 
                                     alt="LG" 
                                     title="LG"
                                />
                                <p>LG</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/microsoft.jpeg" 
                                     alt="Microsoft" 
                                     title="Microsoft"
                                />
                                <p>Microsoft</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/motorola.jpg" 
                                     alt="Motorola" 
                                     title="Motorola"
                                />
                                <p>Motorola</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/positivo.jpg" 
                                     alt="Positivo" 
                                     title="Positivo"
                                />
                                <p>Positivo</p>
                            </a>
                        </div>
                        <div className='marca'>
                            <a href="#">
                                <img src="/assets/img-marcas/samsung.jpg" 
                                     alt="Samsung" 
                                     title="Samsung"
                                />
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
                            <img src="/assets/frete.png" 
                                 alt="Frete" 
                                 title="Frete"
                            />
                            <p>Frete grátis em quase todos os produtos da loja. Aproveite!</p>
                            <p>Nossos produtos são enviados no mesmo dia do pagamento.</p>
                            <p>Enviamos para todo o Brasil e algumas localidades internacionais sem taxa e custos adicionais.</p>
                            <p>EM casos de Devoluções, não é cobrado nenhuma taxa. Tudo isso para que os nossos clientes 
                               possam ter a melhor experiência. 
                            </p>
                        </div>
                        <div className="produtos-diversidade">
                            <img src="/assets/diversidade_produtos.jpg" 
                                 alt="Diversidade de Produtos" 
                                 title="Produtos"
                            />
                            <p>Nossa loja é parceira de várias marcas famosas incluíndo Apple, Asus, Nvidia e muitas outras.
                               Isso é uma vantagem e nos torna uma loja intermediadora entre o cliente e o fabricante.
                            </p>
                            <p>Temos os mais diversos produtos e tecnologia de ponta sendo últimos lançamentos de 
                               Smartphones, Desktops, e periféricos em geral.
                            </p>
                            <p>Temos uma especialidade que é o <strong>Modo Presente</strong> onde o cliente pode optar em
                               enviar para um presente para amigo querido. Neste modo não há custo adicional.
                            </p>
                        </div>
                        <div className='cupom'>
                            <img src="/assets/indiqueganhe.png" 
                                 alt="Cupom" 
                                 title="Cupom de Desconto"
                            />
                            <p>Você pode ganhar um desconto exclusivo para cada amigo indicado.</p>
                            <p>Seu amigo precisa se cadastrar na loja usando seu link de indicação. 
                               Dessa forma Você ganhará um Cupom de Desconto e poderá utiliza-lo em qualquer
                               produto da loja. 
                            </p>
                            <p>Seu amigo também ganhará desconto por se cadastrar usando seu link.</p>
                            <p>Não perca, aproveite!</p>
                        </div>
                    </div>
                    <div className='produtos-mais-vendidos'>
                        <h4>Produtos mais vendidos:</h4>
                        <div className='produtos'>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/airpod.jpeg" 
                                         alt="AirPod" 
                                         title="AirPod"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/iphone.jpg" 
                                         alt="Iphone 15 Pro Max" 
                                         title="Iphone 15 Pro Max"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/monitor.jpg" 
                                         alt="Monitor Gamer" 
                                         title="Monitor Gamer"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/placa-de-video.jpg" 
                                         alt="Placa de Vídeo RTX 4060Ti" 
                                         title="Placa de Vídeo"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/ssd-crucial.jpg" 
                                         alt="SSD Crucial 2TB" 
                                         title="SSD Crucial"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/tablet-gamer.jpg" 
                                         alt="Tablet Gamer Samsung A7" 
                                         title="Tablet Gamer"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/impressora.jpg" 
                                         alt="Impressora HP" 
                                         title="Impressora"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/notebook-dell.avif" 
                                         alt="Notebook Dell" 
                                         title="Notebook Dell"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/carregador-celular.jpg" 
                                         alt="Carregadore de Celular" 
                                         title="Carregador de Celular"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                            <div className='produto'>
                                <a href="#">
                                    <img src="/assets/img-produtos/mouse.jpg" 
                                         alt="Mouse" 
                                         title="Mouse"
                                    />
                                    <div className='shadow'></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </main>
    );
}

export default Home;
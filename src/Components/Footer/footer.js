import React from 'react';
import "./style-footer.css";

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='links-footer'>
                <div className='links conheca-nos'>
                    <h5>Conheça-nos:</h5>
                    <a href="#">Sobre a Greeng Store</a>
                    <a href="#">Informações Corporativas</a>
                    <a href="#">Acessibilidade</a>
                    <a href="#">Carreiras</a>
                    <a href="#">Comunidade</a>
                </div>
                <div className='links venda-na-loja'>
                    <h5>Ganhe dinheiro conosco:</h5>
                    <a href="#">Venda na Greeng Store</a>
                    <a href="#">Proteja e construa sua marca</a>
                    <a href="#">Seja um associado</a>
                    <a href="#">Anuncie seus produtos</a>
                </div>
                <div className='links pagamentos'>
                    <h5>Pagamentos:</h5>
                    <a href="#">Meios de pagamento</a>
                    <a href="#">Compre com desconto</a>
                    <a href="#">Cartão de Crédito</a>
                </div>
                <div className='links mais-ajuda'>
                    <h5>Ajuda:</h5>
                    <a href="#">Sua conta</a>
                    <a href="#">Frete e prazo de entrega</a>
                    <a href="#">Devolução e Reembolso</a>
                    <a href="#">Gerencie seu conteúdo e dispositivos</a> 
                    <a href="#">Mais Ajuda</a>   
                </div>
            </div>
            <div className='logo'>
                <div className='border'></div>
                <img src="/assets/future.png" alt="Logomarca" title='Logomarca'/>
                <div className='border'></div>
            </div>
            <div className='redes-sociais'>
                <div className='redes'>
                    <h4>Acessibilidade Digital na Greeng Store</h4>
                    <a href="#">
                        <img src="/assets/img-redes-sociais/whatsapp.png" 
                             alt="WhatsApp" 
                             title='WhatsApp'
                        />
                    </a>
                    <a href="#">
                        <img src="/assets/img-redes-sociais/facebook.png" 
                             alt="Facebook" 
                             title='Facebook'
                        />
                    </a>
                    <a href="#">
                        <img src="/assets/img-redes-sociais/instagram.png" 
                             alt="Instagram" 
                             title='Instagram'
                        />
                    </a>
                    <a href="#">
                        <img src="/assets/img-redes-sociais/tiktok.png" 
                             alt="TikTok" 
                             title='TikTok'
                        />
                    </a>
                    <a href="#">
                        <img src="/assets/img-redes-sociais/twitter.png" 
                             alt="Twitter" 
                             title='Twitter'
                        />
                    </a>
                </div>
                <div className='libras'>
                    <img src="/assets/img-redes-sociais/libras.jpeg" 
                         alt="Libras BR" 
                         title="Libras BR"
                    />
                    <p>Tradutor para Libras</p>
                </div>
                <div className='contato'>
                    <p>Temos canais de atendimento 24h por dia.</p>
                    <div id="telefone">
                        <img src="/assets/img-redes-sociais/telefone.png" 
                             alt="Telefone" 
                             title="Telefone"
                        />
                        <span>(33) 9 9999-9999</span>
                    </div>
                </div>
            </div>
            <div className='endereco'>
                <p>A <span id="nome-loja">Greeng Store</span> é uma loja Online mas possui uma Central de Relacionamentos em São Paulo 
                   onde são tratados assuntos delicados.
                </p>
                <p id="titulo-endereco">Nosso Endereço:</p>  
                <p>R. da Alfândega, 149 - Brás, São Paulo - SP, 03006-030</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58523.28147224972!2d-46.7002427513672!3d-23.543107099999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce659ad6d46b2f%3A0x3fb330e1fc01d401!2sNatural%20Green%20Store%20*2A*2A*2ALoja%20F%C3%ADsica*2A*2A*2A!5e0!3m2!1spt-BR!2sbr!4v1697416638929!5m2!1spt-BR!2sbr" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                </iframe>  
                <p id="copyright">
                    Copyright © 2023 Greeng Store. Todos os direitos reservados.    
                </p>
                <p id="credit">By @Marcos André </p>
            </div>
        </footer>
    );
}

export default Footer;
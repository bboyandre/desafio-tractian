import React from "react";

const Footer = ()=> {
    return (
    <footer>
        <div className="footer-container"> 
            <article>
                <div className="footer-lista">
                    <h3>
                        Sobre a TRACTIAN
                    </h3>
                    <ul>
                        <li>
                            <a href="https://tractian.com/carreiras/quem-somos" >Trabalhe conosco</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/sobre" >Conheça a Tractian</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/casos-de-sucesso" >Históias de Sucesso</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/imprensa" >Imprensa</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/politica-de-privacidade" >Política de privacidade</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-lista">
                    <h3>
                        PRODUTO
                    </h3>
                    <ul>
                        <li>
                            <a href="https://tractian.com/sensor-tractian" >Sensor Tractian</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/plataforma" >Plataforma</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/funcionalidades" >Funcionalidades</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/planos" >Planos</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/indicacoes" >Indique e Ganhe</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-lista">
                    <h3>
                        MATERIAIS
                    </h3>
                    <ul>
                        <li>
                            <a href="https://tractian.com/guias" >Guias e E-books</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/checklists" >Checklist</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/calculadora" >Calculadora</a>
                        </li>
                        <li>
                            <a href="https://tractian.com/intensivao" >Intensivão</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-lista">
                    <h3>
                        FALE CONOSCO
                    </h3>
                    <ul>
                        <li>
                            <a href="https://tractian.com/contato" >Contato</a>
                        </li>
                        <li>
                            <a href="mailto:igmarinelli@tractian.com?Subject=Fale%20com%20o%20CEO" >Fale com o CEO</a>
                        </li>
                    </ul>
                </div>
            </article>
            <article>
                <div className="footer-lista-final">
                    <h3>
                        INVESTIDOS POR
                    </h3>
                    <div className="investidos">
                        <img src="img/logo-ycombinator-branca.png" alt="Y Combinator" />
                        <img src="img/logo-dfg-branca.png" alt="DFG Investimentos" />
                    </div>
                </div>
                <div className="footer-lista-final">
                    <h3>
                        RECONHECIMENTO
                    </h3>
                    <div className="reconhecimento">
                        <img src="img/logo-gptw.png" alt="GPTW" />
                        <img src="img/logo-stw.png" alt="STW" />
                        <img src="img/capterra-badge.png" alt="Capterra" />
                    </div>
                </div>
                <div className="footer-lista-final">
                    <h3>
                        CONECTAR-SE COM A TRACTIAN
                    </h3>
                    <div className="conectar">
                        <a href="https://www.linkedin.com/company/tractian/" target="_blank" rel="noreferrer" >
                            <img src="img/linkedin.png" alt="LINKEDIN" />
                        </a>
                        <a href="https://www.facebook.com/tractian" target="_blank" rel="noreferrer" >
                            <img src="img/facebook.png" alt="FACEBOOK" />
                        </a>
                        <a href="https://www.instagram.com/tractian/" target="_blank" rel="noreferrer" >
                            <img src="img/instagram.png" alt="INSTAGRAM" />
                        </a>
                        <a href="https://www.youtube.com/c/TRACTIAN" target="_blank" rel="noreferrer" >
                            <img src="img/youtube.png" alt="YOUTUBE" />
                        </a>
                    </div>
                    <div>
                        <a href="/" >
                            <p>
                                © Tractian Tecnologia Ltda
                            </p>
                            <p>
                                CNPJ: 35.755.699/0001-84
                            </p>
                        </a>
                    </div>
                </div>
            </article>
        </div>
    </footer>
    )
}

export default Footer;
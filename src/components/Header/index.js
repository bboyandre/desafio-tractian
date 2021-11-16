import React from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState, useEffect } from "react";

const Header = ()=> {

    const [blackHeader, setBlackHeaader] = useState(false);
    const [lista, setLista] = useState(false);

    const enumeracaoHeader = {
        'conheca': 1,
        'sobre': 2,
        'materiais': 3,
        'pt': 4
    }

    const headerLista = ()=> {

    }
    
    useEffect(()=> {
        const scrollBackgroundColor = ()=> {
            if(window.scrollY > 10) {
                setBlackHeaader(true);
            } else {
                setBlackHeaader(false)
            }
        }
        
        window.addEventListener('scroll', scrollBackgroundColor);
        return()=> {
            window.removeEventListener('scroll', scrollBackgroundColor);
        }
    }, [])

    return (
        <header className={blackHeader ? "black":""}>
            <div className="header-container">
                <nav class="">
                    <div className="" >
                    </div>
                    <div class="">
                        <ul class="">
                            <li>
                                <img className="logo" src="/img/logo-tractian.svg" alt="TRACTIAN" />
                            </li>
                            <li className="item-list">
                                <span className="item-list" href="#">Conheça o Produto<MdKeyboardArrowDown /></span>
                                <ul class="list-content">
                                    <li>
                                        <a href="https://tractian.com/sensor-tractian">Sensor Tractian</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/plataforma">Plataforma</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/funcionalidades">Funcionalidades</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/planos">Planos</a>
                                    </li>
                                    {/* <li>
                                        <a href="#">Agende uma Demonstração</a>
                                    </li> */}
                                </ul>
                            </li>
                            <li className="item-list">
                                <span className="item-list" href="#">Sobre Nós<MdKeyboardArrowDown /></span>
                                <ul class="list-content">
                                    <li>
                                        <a href="https://tractian.com/sobre">Conheça a Tractian</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/casos-de-sucesso">Hitórias de Sucesso</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/contato">Contato</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/carreiras/quem-somos">Trabalhe Conosco</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/imprensa">Imprensa</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="item-list">
                                <span className="item-list" href="#">Materiais Gratuitos<MdKeyboardArrowDown /></span>
                                <ul class="list-content">
                                    <li>
                                        <a href="https://tractian.com/guias">Guias</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/checklists">Checklist</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/calculadora">Calculadora ROI</a>
                                    </li>
                                    {/* <li>
                                        <a href="#">ÚLTIMOS MATERIAIS</a>
                                        <a href="#">Em busca do downtime zero.</a>
                                        <a href="#">Guia completo Indicadores da Manutenção.</a>
                                        <a href="#">Ver todos</a>

                                    </li> */}
                                    
                                </ul>
                            </li>
                            <li className="item-list">
                                <a className="item-list" href="https://tractian.com/blog">Blog</a>
                            </li>
                            <li className="item-list">
                                <a className="item-list" target="_blank" href="https://app.tractian.com/login">Área do Cliente</a>
                            </li>
                            <li className="item-list">
                                <a className="" href="#">PT<MdKeyboardArrowDown /></a>
                                <ul class="list-content">
                                    <li>
                                        <a href="https://tractian.com/guias">PT</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/checklists">EN</a>
                                    </li>
                                    <li>
                                        <a href="https://tractian.com/calculadora">ES</a>
                                    </li>
                                    <li>
                                        <a href="#">PL</a>
                                    </li>
                                    
                                </ul>
                            </li>
                            <li className="btn-demonstracao">
                                <a href="#">Demonstração</a>
                            </li>
                            {/* <li class="">
                            <a class="" href="#">
                                
                            </a>
                            <ul class="">
                                <li><a class="" href="#">Action</a></li>
                                <li><a class="" href="#">Another action</a></li>
                                <li><a class="" href="#">Something else here</a></li>
                            </ul>
                            </li> */}
                            {/* <li class="">
                            <a class="">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
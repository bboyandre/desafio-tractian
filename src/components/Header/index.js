import React from "react";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState, useEffect } from "react";

const Header = ()=> {

    const [blackHeader, setBlackHeaader] = useState(false);

    
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
                                <img className="logo" src="/Logo-Tractian.svg" alt="TRACTIAN" />
                            </li>
                            <li class="">
                                <a class="item-list" href="#">Conheça o Produto<MdKeyboardArrowDown /></a>
                            </li>
                            <li class="">
                                <a class="item-list" href="#">Sobre Nós<MdKeyboardArrowDown /></a>
                            </li>
                            <li class="">
                                <a class="item-list" href="#">Materiais Gratuitos<MdKeyboardArrowDown /></a>
                            </li>
                            <li class="">
                                <a class="item-list" href="#">Blog</a>
                            </li>
                            <li class="">
                                <a class="item-list" href="#">Área do Cliente</a>
                            </li>
                            <li class="">
                                <a class="" href="#">PT<MdKeyboardArrowDown /></a>
                            </li>
                            <li class="btn-demonstracao">
                                <a class="btn-demonstracao" href="#">Demonstração</a>
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
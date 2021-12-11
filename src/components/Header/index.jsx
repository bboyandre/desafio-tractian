import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [blackHeader, setBlackHeaader] = useState(false);
  const [menu, setMenu] = useState(false);

  const menuMobile = () => {
    setMenu((main) => !main);
  };

  useEffect(() => {
    const scrollBackgroundColor = () => {
      if (window.scrollY > 10) {
        setBlackHeaader(true);
      } else {
        setBlackHeaader(false);
      }
    };

    window.addEventListener('scroll', scrollBackgroundColor);
    return () => {
      window.removeEventListener('scroll', scrollBackgroundColor);
    };
  }, []);

  return (
    <header className={blackHeader ? 'black header' : 'header'}>
      <div className="header-container">
        <nav className="menu-desktop">
          <div className="">
            <ul className="">
              <li>
                <Link href="/" passHref>
                  <Image layout="fill" className="logo" src="/img/logo-tractian.svg" alt="TRACTIAN" />
                </Link>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Conheça o Produto
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <Link href="https://tractian.com/sensor-tractian">Sensor Tractian</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/plataforma">Plataforma</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/funcionalidades">Funcionalidades</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/planos">Planos</Link>
                  </li>
                  {/* <li>
                                            <Link href="#">Agende uma Demonstração</Link>
                                        </li> */}
                </ul>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Sobre Nós
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <Link href="https://tractian.com/sobre">Conheça a Tractian</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/casos-de-sucesso">Hitórias de Sucesso</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/contato">Contato</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/carreiras/quem-somos">Trabalhe Conosco</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/imprensa">Imprensa</Link>
                  </li>
                </ul>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Materiais Gratuitos
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <Link href="https://tractian.com/guias">Guias</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/checklists">Checklist</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/calculadora">Calculadora ROI</Link>
                  </li>
                </ul>
              </li>
              <li className="item-list">
                <Link className="item-list" href="https://tractian.com/blog">Blog</Link>
              </li>
              <li className="item-list">
                <Link className="item-list" target="_blank" rel="noreferrer" href="https://app.tractian.com/login">Área do Cliente</Link>
              </li>
              <li className="item-list">
                <Link className="" href="/" passHref>
                  PT
                  <MdKeyboardArrowDown />
                </Link>
                <ul className="list-content">
                  <li>
                    <Link href="https://tractian.com/guias">PT</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/checklists">EN</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/calculadora">ES</Link>
                  </li>
                  <li>
                    <Link href="/">PL</Link>
                  </li>

                </ul>
              </li>
              <li className="item-list btn-demonstracao">
                <Link href="https://tractian.com/">Demonstração</Link>
              </li>
            </ul>
          </div>
        </nav>

        <nav className="menu-mobile">
          <ul className={menu ? 'fechado' : 'aberto alinhamento-lateral'}>
            <li>
              <Link href="/" passHref>
                <Image layout="fill" className="logo" src="/img/logo-tractian.svg" alt="TRACTIAN" />
              </Link>
            </li>
            <li>
              <div role="button" tabIndex={0} className="hamburguer-menu" onClick={menuMobile} aria-hidden="true">
                <GiHamburgerMenu />
              </div>
            </li>
          </ul>
        </nav>

        <nav className={menu ? 'aberto' : 'fechado'}>
          <ul className="topo-mobile-container">
            <ul className="topo-mobile">
              <li>
                <Link href="/" passHref>
                  <Image layout="fill" className="logo" src="https://tractian.com/images/logotractianazul.svg" alt="LOGO TRACTIAN" />
                </Link>
              </li>
              <li type="button" onClick={menuMobile} aria-hidden="true">
                <GrClose style={{ cursor: 'pointer' }} color="white" />
              </li>
            </ul>
            <ul className="lista-topo-mobile">
              <li className="item-list">
                <span className="item-list" href="/">
                  Conheça o Produto
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <Link href="https://tractian.com/sensor-tractian">Sensor Tractian</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/plataforma">Plataforma</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/funcionalidades">Funcionalidades</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/planos">Planos</Link>
                  </li>
                  <li>
                    <Link href="/">Agende uma Demonstração</Link>
                  </li>
                </ul>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Sobre Nós
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <Link href="https://tractian.com/sobre">Conheça a Tractian</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/casos-de-sucesso">Hitórias de Sucesso</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/contato">Contato</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/carreiras/quem-somos">Trabalhe Conosco</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/imprensa">Imprensa</Link>
                  </li>
                </ul>
              </li>
              <li className="item-list">
                <span className="item-list" href="/">
                  Materiais Gratuitos
                  <MdKeyboardArrowDown />
                </span>
                <ul className="list-content">
                  <li>
                    <Link href="https://tractian.com/guias">Guias</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/checklists">Checklist</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/calculadora">Calculadora ROI</Link>
                  </li>
                  <li>
                    <Link href="/">ÚLTIMOS MATERIAIS</Link>
                    <Link href="/">Em busca do downtime zero.</Link>
                    <Link href="/">Guia completo Indicadores da Manutenção.</Link>
                    <Link href="/">Ver todos</Link>

                  </li>

                </ul>
              </li>
              <li className="item-list">
                <Link className="item-list" href="https://tractian.com/blog">Blog</Link>
              </li>
              <li className="item-list">
                <Link className="item-list" target="_blank" rel="noreferrer" href="https://app.tractian.com/login">Área do Cliente</Link>
              </li>
              <li className="item-list">
                <Link className="" href="/" passHref>
                  PT
                  <MdKeyboardArrowDown />
                </Link>
                <ul className="list-content">
                  <li>
                    <Link href="https://tractian.com/guias">PT</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/checklists">EN</Link>
                  </li>
                  <li>
                    <Link href="https://tractian.com/calculadora">ES</Link>
                  </li>
                  <li>
                    <Link href="/">PL</Link>
                  </li>

                </ul>
              </li>
              <li className="btn-demonstracao-mobile">
                <Link href="https://tractian.com/">Demonstração</Link>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

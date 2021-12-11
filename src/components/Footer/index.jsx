import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <article>
        <div className="footer-lista">
          <h3>
            Sobre a TRACTIAN
          </h3>
          <ul>
            <li>
              <Link href="https://tractian.com/carreiras/quem-somos">Trabalhe conosco</Link>
            </li>
            <li>
              <Link href="https://tractian.com/sobre">Conheça a Tractian</Link>
            </li>
            <li>
              <Link href="https://tractian.com/casos-de-sucesso">Históias de Sucesso</Link>
            </li>
            <li>
              <Link href="https://tractian.com/imprensa">Imprensa</Link>
            </li>
            <li>
              <Link href="https://tractian.com/politica-de-privacidade">Política de privacidade</Link>
            </li>
          </ul>
        </div>
        <div className="footer-lista">
          <h3>
            PRODUTO
          </h3>
          <ul>
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
              <Link href="https://tractian.com/indicacoes">Indique e Ganhe</Link>
            </li>
          </ul>
        </div>
        <div className="footer-lista">
          <h3>
            MATERIAIS
          </h3>
          <ul>
            <li>
              <Link href="https://tractian.com/guias">Guias e E-books</Link>
            </li>
            <li>
              <Link href="https://tractian.com/checklists">Checklist</Link>
            </li>
            <li>
              <Link href="https://tractian.com/calculadora">Calculadora</Link>
            </li>
            <li>
              <Link href="https://tractian.com/intensivao">Intensivão</Link>
            </li>
          </ul>
        </div>
        <div className="footer-lista">
          <h3>
            FALE CONOSCO
          </h3>
          <ul>
            <li>
              <Link href="https://tractian.com/contato">Contato</Link>
            </li>
            <li>
              <Link href="mailto:igmarinelli@tractian.com?Subject=Fale%20com%20o%20CEO">Fale com o CEO</Link>
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
            <Image layout="fill" src="/img/logo-ycombinator-branca.png" alt="Y Combinator" />
            <Image layout="fill" src="/img/logo-dfg-branca.png" alt="DFG Investimentos" />
          </div>
        </div>
        <div className="footer-lista-final">
          <h3>
            RECONHECIMENTO
          </h3>
          <div className="reconhecimento">
            <Image layout="fill" src="/img/logo-gptw.png" alt="GPTW" />
            <Image layout="fill" src="/img/logo-stw.png" alt="STW" />
            <Image layout="fill" src="/img/capterra-badge.png" alt="Capterra" />
          </div>
        </div>
        <div className="footer-lista-final">
          <h3>
            CONECTAR-SE COM A TRACTIAN
          </h3>
          <div className="conectar">
            <Link href="https://www.linkedin.com/company/tractian/" target="_blank" rel="noreferrer" passHref>
              <Image layout="fill" src="/img/linkedin.png" alt="LINKEDIN" />
            </Link>
            <Link href="https://www.facebook.com/tractian" target="_blank" rel="noreferrer" passHref>
              <Image layout="fill" src="/img/facebook.png" alt="FACEBOOK" />
            </Link>
            <Link href="https://www.instagram.com/tractian/" target="_blank" rel="noreferrer" passHref>
              <Image layout="fill" src="/img/instagram.png" alt="INSTAGRAM" />
            </Link>
            <Link href="https://www.youtube.com/c/TRACTIAN" target="_blank" rel="noreferrer" passHref>
              <Image layout="fill" src="/img/youtube.png" alt="YOUTUBE" />
            </Link>
          </div>
          <div>
            <Link href="/" passHref>
              <p>
                © Tractian Tecnologia Ltda
              </p>
              <p>
                CNPJ: 35.755.699/0001-84
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  </footer>
);

export default Footer;

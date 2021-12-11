import Image from 'next/image';
import React from 'react';

const Monitoramento = () => (
  <section className="monitoramento">
    <div className="monitoramento-container">
      <div className="col-6">
        <div className="box-monitoramento">

          <h1 className="margin-b">
            Monitoramento Online e Gestão de Ativos em um só lugar
          </h1>

          <p className="margin-b">
            Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.
          </p>

          <ul className="row-btn margin-b">
            <li className="">
              <button type="button" className="btn-demonstracao">
                Demonstração
              </button>
            </li>
            <li className="icon-capterra">
              {/* <Image layout="fill" src="" alt="CAPTERRA" /> */}
            </li>

          </ul>

          <p>
            Já é cliente?
            <a href="/">
              <strong>Acesse aqui.</strong>
            </a>
          </p>

        </div>
      </div>
      <div className="col-6 img-monitoramento">
        <Image layout="fill" className="monitoramento-animacao" src="/img/animacao.svg" alt="Monitoramento Online" />
      </div>
      <Image layout="fill" src="/img/ondas.svg" className="ondas" alt="Imagem de ondas" />
    </div>
  </section>
);

export default Monitoramento;

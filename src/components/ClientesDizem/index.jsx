import React from 'react';
import Image from 'next/image';

const ClientesDizem = () => (
  <section className="clientes-dizem">
    <div>
      <h1>O que os nossos clientes dizem:</h1>
    </div>
    <div>
      <Image layout="responsive" src="https://tractian.com/images/capterra-badge.png" alt="Capterra Shortlist 2021" />
      <p>
        Nomeada solução favorita de CMMS e OEE no ranking da Capterra 2021
      </p>
      <button type="button">Agendar demo</button>
    </div>
    <div className="card-cliente">
      Conteudo dinamico
    </div>
  </section>
);

export default ClientesDizem;

import React from 'react';

const Melhore = () => (
  <section className="melhore">
    <div className="melhore-container">
      <h1>
        Melhore os seus processos de manutenção
      </h1>
      <p>
        Preencha o formulário para uma demonstração.
      </p>
      <form>
        <span>Nome</span>
        <input type="text" placeholder="Insira seu nome" />
        <span>Cargo</span>
        <input type="text" placeholder="Insira seu cargo" />
        <span>E-mail profissional</span>
        <input type="text" placeholder="Insira seu e-mail profissional" />
        <span>Telefone</span>
        <input ype="text" placeholder="(xx) xxxx-xxxx" />
        <span>Quantidade de pontos monitorados:</span>
        <ul>
          <li>
            <input type="checkbox" />
            <span>10 a 20</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>21 a 30</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>31 a 50</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Mais de 50</span>
          </li>
        </ul>
        <div>
          <button type="button" className="btn-enviar">Enviar</button>
        </div>
      </form>
    </div>
  </section>
);

export default Melhore;

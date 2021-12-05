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
        <label>Nome</label>
        <input placeholder="Insira seu nome" />
        <label>Cargo</label>
        <input placeholder="Insira seu cargo" />
        <label>E-mail profissional</label>
        <input placeholder="Insira seu e-mail profissional" />
        <label>Telefone</label>
        <input placeholder="(xx) xxxx-xxxx" />
        <label>Quantidade de pontos monitorados:</label>
        <ul>
          <li>
            <input type="checkbox" />
            <label>10 a 20</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>21 a 30</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>31 a 50</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>Mais de 50</label>
          </li>
        </ul>
        <div>
          <button className="btn-enviar">Enviar</button>
        </div>
      </form>
    </div>
  </section>
);

export default Melhore;

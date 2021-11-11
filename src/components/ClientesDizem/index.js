import React from "react";

const ClientesDizem = ()=> {
    return (
        <section className="clientes-dizem">
            <div>
                <h1>O que os nossos clientes dizem:</h1>
            </div>
            <div>
                <img src="https://tractian.com/images/capterra-badge.png" />
                <p>
                    Nomeada solução favorita de CMMS e OEE no ranking da Capterra 2021
                </p>
                <button>Agendar demo</button>
            </div>
            <div className="card-cliente">
                Conteudo dinamico
            </div>
        </section>
    )
}

export default ClientesDizem;
import React from "react";

const Monitoramento = ()=> {
    return (
        <section className="monitoramento">
            <div className="monitoramento-container">
                <div className="col-6">
                    <div className="box-monitoramento">
                        
                            <h1>
                                Monitoramento Online e Gestão de Ativos em um só lugar
                            </h1>
                        
                        
                            <p>
                                Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.
                            </p>
                        
                        <ul className="row-btn">
                            <li className="">
                                <button className="btn-demonstracao">
                                    Demonstração
                                </button>
                            </li>
                            <li className="icon-capterra">
                                <img src="" alt="CAPTERRA" />
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
                    <img className="monitoramento-animacao" src="/img/animacao.svg" alt="Monitoramento Online" />
                </div>
                <img src="/img/ondas.svg" class="ondas" alt="Imagem de ondas"/>
            </div>
        </section>
    )
}

export default Monitoramento;
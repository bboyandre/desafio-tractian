import React from "react";
import { useState } from "react";

const ManutecaoPreventiva = ()=> {
    
    
    const enumeracao = {
        'sensor': 1,
        'monitoramento': 2,
        'gestao': 3
    }
    
    const [dinamico, setDinamico] = useState(enumeracao.sensor);

    const sensorPlug = ()=> {
        return (
            <article className="conteudo-dinamico">
                <div className="img-dinamico">
                    <img className="img-sensor" style={{ maxWidth: "400px"}} src="https://imgix.tractian.com/images/cole-o-sensor.png?auto=format&fit=max&w=640" alt="Sensor Plug & Play" />
                </div>
                <div>
                    <h4>
                        Tecnologia IoT avançada para conectar seus ativos
                    </h4>
                    <p>
                        Nossos sensores enviam dados do seu equipamento através de rede 3g/4g. Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condição da sua máquina.
                    </p>
                </div>
            </article>
        )
    }

    const monitoramentoOnline = ()=> {
        return (
            <article className="conteudo-dinamico">
                <div className="img-dinamico">
                    <img className="img-sensor" style={{ maxWidth: "400px"}} src="https://imgix.tractian.com/images/features-header.png?auto=format&fit=max&w=640" alt="Sensor Plug & Play" />
                </div>
                <div>
                    <h4>
                        Plataforma que trabalha por você
                    </h4>
                    <p>
                        Insights automáticos, detecção de folgas mecânica, desalinhamento, desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de máquina.
                    </p>
                </div>
            </article>
        )
    }

    const gestaoDeAtivos = ()=> {
        return (
            <article className="conteudo-dinamico">
                <div className="img-dinamico">
                    <img className="img-sensor" style={{ maxWidth: "100%"}} src="https://imgix.tractian.com/trac-os/automacoes-e-metricas.png?auto=format&fit=max&w=640" alt="Sensor Plug & Play" />
                </div>
                <div>
                    <h4>
                        O Software de manutenção dos seus sonhos
                    </h4>
                    <p>
                        Use procedimentos online para organizar checklists e inspeções. Centralize a rotina do seu time e potencialize as atividades de cada colaborador através das automações e métricas.
                    </p>
                </div>
            </article>
        )
    }

    return (
        <section className="manutencao">
            <div className="manutencao-container">
                <div className="box-manutencao">
                    <div className="">
                        <h3>
                            manutenção preditiva descomplicada
                        </h3>
                        <h1>Mantenha a sua equipe e seus ativos com o <strong>melhor desempenho</strong></h1>
                    </div>
                    <div>
                        <ul>
                            <li className={dinamico == 1 ? 'lista-atual' : ''} onClick={()=> setDinamico(enumeracao.sensor)}>
                                {/* <span>01 </span>  */}
                                Sensor Plug & Play
                            </li>
                            <li className={dinamico == 2 ? 'lista-atual' : ''} onClick={()=> setDinamico(enumeracao.monitoramento)}>
                                {/* <span>02 </span>  */}
                                Monitoramento Online
                            </li>
                            <li className={dinamico == 3 ? 'lista-atual' : ''} onClick={()=> setDinamico(enumeracao.gestao)}>
                                {/* <span>03 </span>  */}
                                Gestão de Ativos
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="box-manutencao">
                    {dinamico == 1 ? sensorPlug():''}
                    {dinamico == 2 ? monitoramentoOnline():''}
                    {dinamico == 3 ? gestaoDeAtivos():''}
                </div>
            </div>
        </section>
    )
}

export default ManutecaoPreventiva;
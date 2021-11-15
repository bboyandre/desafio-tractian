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
            <article>
                {/* <h3>
                    O Software de manutenção dos seus sonhos
                </h3> */}
                <div className="img-dinamico">
                    <img className="img-sensor" src="https://imgix.tractian.com/images/cole-o-sensor.png?auto=format&fit=max&w=640" alt="Sensor Plug & Play" />
                </div>
                <h4>
                    Tecnologia IoT avançada para conectar seus ativos
                </h4>
                {/* <p>
                Use procedimentos online para organizar checklists e inspeções. Centralize a rotina do seu time e potencialize as atividades de cada colaborador através das automações e métricas.
                </p> */}
            </article>
        )
    }

    const monitoramentoOnline = ()=> {
        return (
            <article>
                {/* <h3>
                    Monitoramento Online
                </h3> */}
                <div className="img-dinamico">
                    <img className="img-sensor" src="https://imgix.tractian.com/images/features-header.png?auto=format&fit=max&w=640" alt="Sensor Plug & Play" />
                </div>
                <h4>
                    Plataforma que trabalha por você
                </h4>
            </article>
        )
    }

    const gestaoDeAtivos = ()=> {
        return (
            <article>
                {/* <h3>
                    Gestão de Ativos
                </h3> */}
                <div className="img-dinamico">
                    <img className="img-sensor" src="https://imgix.tractian.com/trac-os/automacoes-e-metricas.png?auto=format&fit=max&w=640" alt="Sensor Plug & Play" />
                </div>
                <h4>
                    O Software de manutenção dos seus sonhos
                </h4>
            </article>
        )
    }

    return (
        <section className="manutencao">
            <div className="col-6 box-manutencao">
                <div className="">
                    <h3>
                        manutenção preditiva descomplicada
                    </h3>
                    <h1>Mantenha a sua equipe e seus ativos com o <strong>melhor desempenho</strong></h1>
                </div>
                <div>
                    <ul>
                        <li onClick={()=> setDinamico(enumeracao.sensor)}>
                            {/* <span>01 </span>  */}
                            Sensor Plug & Play
                        </li>
                        <li onClick={()=> setDinamico(enumeracao.monitoramento)}>
                            {/* <span>02 </span>  */}
                            Monitoramento Online
                        </li>
                        <li onClick={()=> setDinamico(enumeracao.gestao)}>
                            {/* <span>03 </span>  */}
                            Gestão de Ativos
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-6 box-manutencao">
                {/* <div className="">
                    <h3>
                        manutenção preditiva descomplicada
                    </h3>
                    <h1>Mantenha a sua equipe e seus ativos com o <strong>melhor desempenho</strong></h1>
                </div>
                <div>
                    <ul>
                        <li>
                            
                            Sensor Plug & Play
                        </li>
                        <li>
                           
                            Monitoramento Online
                        </li>
                        <li>
                           
                            Gestão de Ativos
                        </li>
                    </ul>
                </div> */}
                <div>
                    {dinamico == 1 ? sensorPlug():''}
                    {dinamico == 2 ? monitoramentoOnline():''}
                    {dinamico == 3 ? gestaoDeAtivos():''}
                </div>
            </div>
        </section>
    )
}

export default ManutecaoPreventiva;
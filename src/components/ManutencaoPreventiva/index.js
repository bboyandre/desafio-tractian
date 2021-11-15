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
                <h1>
                    Sensor Plug & Play
                </h1>
            </article>
        )
    }

    const monitoramentoOnline = ()=> {
        return (
            <article>
                <h1>
                    Monitoramento Online
                </h1>
            </article>
        )
    }

    const gestaoDeAtivos = ()=> {
        return (
            <article>
                <h1>
                    Gestão de Ativos
                </h1>
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
                <div className="">
                    <h3>
                        manutenção preditiva descomplicada
                    </h3>
                    <h1>Mantenha a sua equipe e seus ativos com o <strong>melhor desempenho</strong></h1>
                </div>
                <div>
                    <ul>
                        <li>
                            {/* <span>01 </span>  */}
                            Sensor Plug & Play
                        </li>
                        <li>
                            {/* <span>02 </span>  */}
                            Monitoramento Online
                        </li>
                        <li>
                            {/* <span>03 </span>  */}
                            Gestão de Ativos
                        </li>
                    </ul>
                    <div>
                        {dinamico == 1 ? sensorPlug():''}
                        {dinamico == 2 ? monitoramentoOnline():''}
                        {dinamico == 3 ? gestaoDeAtivos():''}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManutecaoPreventiva;
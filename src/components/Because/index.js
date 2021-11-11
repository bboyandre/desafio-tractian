import React from "react";
import { GrHostMaintenance } from 'react-icons/gr';

const Because = ()=> {
    return (
        <div className="because">
            <h1>Por que escolher a <strong>Tractian?</strong></h1>
            <div className="cards">
                <div className="card">
                    <div><GrHostMaintenance fontSize="50px"/></div>
                    <h3><strong>Manutenção Preditiva</strong></h3>
                    <p>
                        Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.
                    </p>
                </div>
                <div className="card">
                    <div><GrHostMaintenance fontSize="50px"/></div>
                    <h3><strong>Manutenção Preditiva</strong></h3>
                    <p>
                        Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.
                    </p>
                </div>
                <div className="card">
                    <div><GrHostMaintenance fontSize="50px"/></div>
                    <h3><strong>Manutenção Preditiva</strong></h3>
                    <p>
                        Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.
                    </p>
                </div>
                <div className="card">
                    <div><GrHostMaintenance fontSize="50px"/></div>
                    <h3><strong>Manutenção Preditiva</strong></h3>
                    <p>
                        Detecção automática de falhas, saúde do ativo em tempo real, confiabilidade e insights automáticos.
                    </p>
                </div>
            </div>
            <div className="btn-agora">
                <button>Começar agora!</button>
            </div>
        </div>
    )
}

export default Because;
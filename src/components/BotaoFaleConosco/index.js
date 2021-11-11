import React from "react";
import { GrClose } from 'react-icons/gr';

const BotaoFaleConosco = ()=> {
    return (
        <section>
            <h1>
                Dúvidas? Fale conosco!
            </h1>
            <div>
                <GrClose />
            </div>
            <p>Suporte ausente</p>
            <ul>
                <li>
                    bolinha atendente
                </li>
                <li>
                    bolinha atendente
                </li>
                <li>
                    bolinha atendente
                </li>
                <li>
                    bolinha atendente 5+
                </li>
            </ul>
            <div className="caixa-dialogo">
                <div className="conversa">
                    <li>
                        bolinha atendente atual
                    </li>
                    <p>Como podemos te ajudar com a TRACTIAN?</p>
                </div>
                <div>
                    <input placeholder="Escreva sua mensagem..."/>
                    <ul>
                        <li>
                            icon emotio
                        </li>
                        <li>
                            icon enviar arquivo
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default BotaoFaleConosco;
import React from "react";

const SlideMarcas = ()=> {
    const marcas = [
        'https://imgix.tractian.com/images/logo-iochpemaxion.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-embraer.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-ciser.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-master.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-yara-2.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-albras-3.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-pirelli-2.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-tigre-2.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-arcelor-2.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-electrolux.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-air-liquide-2.png?auto=format&fit=max&w=256',
        'https://imgix.tractian.com/images/logo-marilan-2.png?auto=format&fit=max&w=256'
    ]
    return (
        <section className="slide-marcas">
            {marcas.map(i => (
                <div className="slide-row">
                    <img style={{  background:
    `linear-gradient(
      rgba(8,8,8,0.3),rgba(8,8,8,0.33)
    ),
    url(i) no-repeat`}} src={i} alt="SLIDE"/>
                </div>
            ))}
        </section>
    )
}

export default SlideMarcas;
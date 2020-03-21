import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <div className="contenido-hero contenedor">
                <h2>Aprende algo nuevo</h2>
                <p>Todos los cursos a $15</p>
                <form action="" className="formulario">
                    <input type="text" placeholder="¿Qué te gustaría Aprender?"/>
                    <input type="submit" className="submit-buscador"/>
                </form>
            </div>
        </div>
    );
}

export default Hero;
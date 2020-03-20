import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contenedor">
                <nav className="menu">
                    <a href="http://localhost:3000/" className="enlace">Para tu Negocio</a>
                    <a href="http://localhost:3000/" className="enlace">Conviertete en Instructor</a>
                    <a href="http://localhost:3000/" className="enlace">Aplicaciones Móviles</a>
                    <a href="http://localhost:3000/" className="enlace">Soporte</a>
                    <a href="http://localhost:3000/" className="enlace">Temas</a>
                </nav>
                <nav className="menu">
                    <a href="http://localhost:3000/" className="enlace">¿Quiénes Somos?</a>
                    <a href="http://localhost:3000/" className="enlace">Empleo</a>
                    <a href="http://localhost:3000/" className="enlace">Blog</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
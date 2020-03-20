import React from 'react';
import logo from './../../img/logo.jpg';
import cart from './../../img/cart.png';
import curso1 from './../../img/curso1.jpg';

const Header = () => {
    return (
            <header className="header contenedor">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="carrito-compras">
                    <img className="img-carrito" src={cart} alt="cart"/>
                    <div className="contenido oculto">
                        <table id="lista-carrito"> 
                            <thead>
                                <tr>
                                    <th>Imagen</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody> 
                                <tr>
                                    <td>
                                        <img src={curso1} alt="curso1"/>
                                    </td>
                                    <td>CSS Grid y Flexbox Construye + 10 Proyectos</td>
                                    <td>$15</td>  
                                </tr>
                            </tbody>
                        </table>
                        <a href="/" className="boton">Vaciar Carrito</a>
                    </div>
                </div>
            </header>
    );
}
export default Header;
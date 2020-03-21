import React, { Fragment } from 'react';
import curso1 from './../../img/curso1.jpg';
import curso2 from './../../img/curso2.jpg';
import curso3 from './../../img/curso3.jpg';
import curso4 from './../../img/curso4.jpg';
import curso5 from './../../img/curso5.jpg';
import estrellas from './../../img/estrellas.png';

const Cursos = () => {
    return (
        <Fragment>
            <h1 className="encabezado centrado">Cursos en Línea</h1>

            <div className="cursos contenedor">

                <div className="curso">
                    <img className="imagen-curso" src={curso1} alt="curso1"/>
                    <div className="info-curso">
                        <h4>HTML5, CSS3, JavaScript para Principiantes</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso2} alt="curso2"/>
                    <div className="info-curso">
                        <h4>Curso de Comida Vegetariana</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso3} alt="curso3"/>
                    <div className="info-curso">
                        <h4>Guitarra para Principiantes</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso4} alt="curso4"/>
                    <div className="info-curso">
                        <h4>Huerto en tu casa</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso5} alt="curso5"/>
                    <div className="info-curso">
                        <h4>Decoración con productos de tu hogar</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso1} alt="curso1"/>
                    <div className="info-curso">
                        <h4>Diseño Web para Principiantes</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso2} alt="curso2"/>
                    <div className="info-curso">
                        <h4>Comida Mexicana para principiantes</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso3} alt="curso3"/>
                    <div className="info-curso">
                        <h4>Estudio Musical en tu casa</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso4} alt="curso4"/>
                    <div className="info-curso">
                        <h4>Cosecha tus propias frutas y verduras</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso5} alt="curso5"/>
                    <div className="info-curso">
                        <h4>Prepara galletas caseras</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso1} alt="curso1"/>
                    <div className="info-curso">
                        <h4>JavaScript Moderno con ES6</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

                <div className="curso">
                    <img className="imagen-curso" src={curso2} alt="curso2"/>
                    <div className="info-curso">
                        <h4>100 Recetas de Comida Natural</h4>
                        <p>Emmanuel Martínez</p> 
                        <img src={estrellas} alt="estrellas"/>
                        <div className="precio">
                            <p className="regular">$200</p>
                            <p className="oferta">$15</p>
                        </div>
                        <a href="http://localhost:3000/" className="boton">Agregar al Carrito</a>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Cursos;
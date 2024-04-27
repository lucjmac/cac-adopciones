import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contacto = () => {

    return (
        <h2>Contacto</h2>,
        <section>
                <div>
                    <form action="">
                        <div>
                            <label htmlFor="inputEmail">Correo electrónico:</label>
                            
                            <input type="email" name="correo" placeholder="Ingrese el correo en el que desea recibir su respuesta..."  />
                        </div>
                        <div> 
                            <label htmlFor="text">Asunto:</label>
                            <br />
                            <input type="text" name="asunto" placeholder="Ingrese una breve descripción de su mensaje..."/>
                        </div>
                        <div>
                            <label htmlFor="text">Mensaje:</label>
                            <br />
                            <input type="text" name="mensaje" placeholder="Ingrese su mensaje aquí..." />
                        </div>
                        <div>
                            <button type="submit" name="enviar">Enviar</button>
                        </div>
                    </form>

                </div>
        </section>
    )
}

export default Contacto
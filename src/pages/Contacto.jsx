import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./Contacto.module.css"


const Contacto = () => {

    return (
        
        <div className={styles.contacto_container}>
            <h2>CONTACT US!</h2>
            <div className={styles.linea}></div>
                <section className={styles.contacto_section}>
                    <div className={styles.contacto_form}>
                        <form action="">
                            <div className={styles.form_group}>
                                <label htmlFor="inputEmail">Email adress:</label>
                            <input type="email" name="correo" placeholder="Enter the email address where you want to receive your reply..." />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="text">Subject:</label>
                            <input type="text" name="asunto" placeholder="Enter a brief description of your message..." />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="text">Message:</label>
                            <textarea name="mensaje" rows="4" placeholder="Enter your message here..."></textarea>
                            </div>
                            <div className={styles.form_group}>
                                <button type="submit" name="enviar">Enviar</button>
                            </div>
                        </form>
                    </div>
            </section>
            
            <div>
                {/* Foto de alguna receta */}
            </div>
            
        </div>
    )
}

export default Contacto;

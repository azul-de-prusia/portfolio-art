import React, {Component} from 'react';
import '../App.css';

class Contact extends Component{
    render(){
        return(
            <div className="contact">
                
                <h1>Contact info</h1>
                <ul>
                    <li className="tex">
                    <h3><img src="https://i.ibb.co/hFVcxwN/portfolio.jpg" className="icon"/>  Curriculum Vitae</h3><a href="https://i.ibb.co/j5mg2y2/cv.jpg" target="_blank" className="href">Curriculum Vitae viewer</a>
                    <h3><img src="https://i.ibb.co/s2q6Z60/linked.jpg" alt="" className="icon" />   LinkedIn</h3><a href="https://www.linkedin.com/in/coral-qui%C3%B1ones-334135192/" target="_blank" className="href">https://www.linkedin.com/in/coral-quignones-/</a>
                    <h3><img src="https://i.ibb.co/Yj5tQD8/correo.jpg" alt="" className="iconw" />   Email</h3><a href="mailto:tegthyn_600@hotmail.com" target="_blank" className="href">tegthyn_600@hotmail.com</a>
                    <h3><img src="https://i.ibb.co/RP1xHwr/github.jpg" alt="" className="icon" />   Github</h3><a href="https://github.com/azul-de-prusia" target="_blank" className="href">https://github.com/azul-de-prusia</a>
                    <h3><img src="https://i.ibb.co/Cnw9SwW/insta.jpg" alt="" className="icon" />   Instagram</h3><a href="https://www.instagram.com/azul.de.prusia/" target="_blank" className="href">azul.de.prusia</a>
                    </li>
                    <li>
                        <img src="https://i.ibb.co/ZxnxNgG/5-copia.jpg" className="background" alt ="" title="Deer by Azul de Prusia"></img>
                    </li>
                </ul>
            </div>

        );

    }
};

export default Contact;
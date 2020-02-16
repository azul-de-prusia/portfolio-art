import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
//import { Link, animateScroll as scroll } from "react-scroll";


class Navigation extends Component{
    render() {
 //       const sections = ["About", "Contact", "Display projects", "Skills", "Home", "Useless"];
   //     const navLinks = sections.map((section) => {
            return(
              <nav>
                  <h2>Azul de Prusia</h2>
                    <ul>
                        <li><Link to="/About" ><button className="buttonStyle">About</button></Link></li>
                        <li><Link to="/Display"><button className="buttonStyle">Display projects</button></Link></li>
                        <li><Link to="/Contact"><button className="buttonStyle">Contact</button></Link></li>
                        <li><Link to="/Skills"><button className="buttonStyle">Skills</button></Link></li>
                        <li><Link to="/Useless"><button className="buttonStyle">Useless extra data</button></Link></li>
                    </ul>
                    <h2>Tegthyn Coral Quiñones Gutiérrez</h2>
              </nav>  
              
            
        );
    }
}

export default Navigation; 
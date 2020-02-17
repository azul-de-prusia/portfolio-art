import React, {Component} from 'react';
import '../App.css';

class Skills extends Component{
    render(){
        return(
            <div className="skills">
                <h1>Skills</h1>
                        <ul>
                            
                        
                        <li className="col">
                        <h3 className="soft">Soft </h3>
                        <p>Creative</p>
                        <p>Task oriented</p>
                        <p>Resourceful</p>
                        <p>Self learning</p>
                        <p>Team player</p>
                        <p>Organized</p>
                        <p>Responsible</p>
                        </li>
                        <li>
                        <p>Observer</p>
                        <p>Analytical</p>
                        <p>Independent</p>
                        <p>Patient</p>
                        <p>Adaptable</p>
                        <p>Good writting</p>
                        <p></p>
                            </li>

                        <li className="Col">
                            <h3 className="soft">Technical</h3>
                        <p>Adobe Photoshop</p>
                        <p>Corel draw</p>
                        <p>GIMP</p>
                        <p>Krita</p>
                        <p>Adobe Illustrator</p>
                        <p>Blender</p>
                        <p>Wacom</p>
                        </li>
                        <li>
                        <p>Strong drawing skills</p>
                        <p>Human and animal anatomical knowledge </p>
                        <p>Practical knowledge of golden composition</p>
                        <p>Pencil, pen, charcoal and pastel drawing</p>
                        <p>Watercolor painting</p>
                        <p>Engraving</p>
                        <p>Color theory</p>
                        <p>Oil painting</p>
                        <p>Tempera painting</p>
                        </li>


                        <h3 className="soft">Complementary skills as Front-end developer:</h3>
                        <li>
                        <p>Javascript ES6</p>
                        <p>HTML 5</p>
                        <p>CSS 3</p>
                        <p>React js</p>
                        <p>Node js</p>
                        <p>Responsive web design</p>
                        <p>Canvas HTML</p>
                        </li>
                        <li>
                        <p>Agile methodology</p>
                        <p>Git</p>
                        <p>High fidelity prototyping with Marvel and Figma</p>
                        <p>Firebase</p>
                        <p>SQL</p>
                        <p>C basic</p>
                            </li>
                        </ul>
            </div>

        );

    }
};

export default Skills;
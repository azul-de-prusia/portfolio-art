import React, {Component} from 'react';
import '../App.css';


class Useless extends Component{
    render(){
        return(
            <div className="useless">
                <div>
                <h1>Educational info</h1>
                </div>

                <ul>
                    <li className="col">
                        <h2>Academic training</h2>
                        <p>Laboratoria Guadalajara.Intensive self-learning coding bootcamp for women to become part of IT workforce as Front-end developers.
                        May 2019 - Dic 2019</p>
                        <p>Western Conservation and Restoration School, (ECRO) Guadalajara Jalisco. Bachelor´s degree in restoration of cultural
                             heritage generation 2010 - 2015</p>
                        <p>Professional IT technician, University of Guadalajara. 2016 - 2010</p>
                    </li>
                    <li className="col">
                    <h2>Languages</h2>
                            <p>Native Spanish</p>
                        <p>English B2 level according to the Common European Framework of Reference for Languages (CEFR)</p>
                    </li>
                    <li className="col">
                        <h3>Complementary wokshops</h3>
                        <p>Workshop: How to make a comic in 4 strips or 5739 pages with the same pencil? Taught by La patografica editorial on FIL Gdl.
                            Storyboards and storytelling in a small comic, how to give space and time ilusion, .
                        </p>
                        <p>Engraving workshop at Yuriria´s house of culture. Linoleum, drypoint, woodcut, and printing techniques. 2017 Guanajuato</p>
                        <p>Engraving and silkscreen workshop Ludoteca DIF Zapopan 2016 to 2017 </p>
                        
                    </li>
                </ul>
                
        </div>

        );

    }
};

export default Useless;
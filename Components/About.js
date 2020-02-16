import React, {Component} from 'react';
import '../App.css';

class About extends Component{
    render(){
        return(
            <div className="About">
                <h1>About me</h1>
                <ul>
                    <li className="paragraph">
                            <p>I have just completed a training as a Front End developer at Laboratoria, a coding bootcamp; we studied the latest technologies of the field.
I have a B.D  in Cultural Heritage Restoration, and through out my 7-year career, I specialized  in paper restoration. 
I´m also a self taught illustrator and madonnari artist.
I’m a very creative person who loves to learn new things. Currently I'm starting my career at IT as a Front-End developer and I would love improve my Front-End skills and learn more about UX/UI tools.</p>
                            
                    </li>          
                    <li className="small">
                    <p> I would love to collaborate with a company that appreciates creative work as well as visual and audiovisual content.
In the long term I would like to develop tools to become a UX/UI designer and create audiovisual content such as animation.</p>
                        <h2>Languages</h2>
                            <p>Native Spanish</p>
                        <p>English B2 level according to the Common European Framework of Reference for Languages (CEFR)</p>
                    </li>
                <li className="small">
                    <img src="https://i.ibb.co/Gx6j0z6/giphy.gif" alt="" className="gif"></img>
                </li>
             </ul>            

            </div>

        );

    }
};

export default About;


import React, {Component} from 'react';


class Home extends Component{
    render(){
        return(
            <div className="home">
                  <h1>Home</h1>
                <ul>
                    <li className="tex">
                <p>
                    Welcome to my Front-End developer jr. portfolio, here you can find some projects i´ve worked on,
                    by using JavaScript, CSS, HTML, React js, Node js and so on. If you´re interested on my profile,
                    want to share feedback or leave some comments you can also find the ways to contact me.  
                </p>

                <p className="footer">
                    This was developed with React js & React router, enjoy.
                </p>
                </li>
                <li>
                    <img src="https://i.ibb.co/T8GfFnV/6-copia.jpg" alt="" className="background" title="Xylocopa caerulea by Azul de Prusia"></img>
                </li>
                </ul>
            </div>

        );

    }
};

export default Home;

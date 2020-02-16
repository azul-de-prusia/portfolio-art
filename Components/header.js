import React, {Component} from 'react';
//import Background from '../giphy.gif';
import '../header.css';

//const styles = {
  //  backgroundColor: 'black',
    //height: '90vh',
    //backgroundSize: 'cover',
    
//}

class Header extends Component{
    render(){
        return(
            <header className="header">
                <h2>{this.props.Title}</h2>
        
            </header>

        );

    }
};

export default Header;
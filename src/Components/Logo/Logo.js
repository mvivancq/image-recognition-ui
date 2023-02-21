import React from "react";
import Tilt from 'react-parallax-tilt';
import Brain from './brain.png';
import "./Logo.css"

const Logo = props => {
    return(
        <div className="ma4 mt0 pa3" style={{ height: '100px'}}>
            <Tilt className="br2 shadow-2 tilt-overflow" >
                <img className="br2 shadow-2 pa3" src={Brain} alt="brain"></img>
            </Tilt>
        </div>
    );
}

export default Logo;
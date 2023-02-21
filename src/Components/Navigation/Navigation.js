import React from "react";

const Navigation = props => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <a href={"/"} className="f3 link dim white underline pa3 pointer"> Sign Out </a>
        </nav>
    );
}

export default Navigation;
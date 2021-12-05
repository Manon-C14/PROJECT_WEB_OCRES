import React from "react";
import "./Navbar.css";

export default class Navbar extends React.Component{

    render(){
        return(
            <header>
                <div className="Logo">
                    <p>
                        Voyages
                    </p>
                </div>
                <div className="Navigation">
                    <button className="Bouton1 Active">
                        Mon dashboard
                    </button>
                    <button className="Bouton2">
                        Mon API
                    </button>
                </div>
            </header>
            
        );
    }

}
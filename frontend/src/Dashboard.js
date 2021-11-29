import React from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
<<<<<<< HEAD
import InfoPays from "./contents/InfosPays";
import PaysPlusVisites from "./contents/PaysPlusVisites";
import MesPays from "./contents/MesPays";
import Heure from "./contents/Heure";
import Meteo from "./contents/Meteo";
=======
import InfoPays from "./InfosPays";
>>>>>>> Faustine
import Traduction from "./contents/Traduction";
/*import { text } from "./stories/1-Button.stories";

const Text1 = text;*/   

export default class Dashboard extends React.Component{

    render(){
        return(
            <div className="Main">
                <Navbar />
<<<<<<< HEAD
                <div className="Content">
                    <div className="SidebarLeft">
                        <InfoPays />
                    </div>
                    <div className="ContentRight">
                        <div className="Top">
                            <PaysPlusVisites/>
                            <MesPays/>
                        </div>
                        <div className="Bottom">
                            <Heure/>
                            <Meteo/>
                            <Traduction/>
                        </div>
                    </div>    
                </div>
            </div>
=======
                <InfoPays />
                <Traduction/>
                

            </>
>>>>>>> Faustine
        )
    }
}
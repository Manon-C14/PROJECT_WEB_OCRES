import React, { useState, useEffect } from "react";
import VoyageDataService from "../services/voyages";
import "../contents/css/MesPays.css";


const ListeVoyages = props => {
    const [voyages, setVoyages] = useState([]);



    useEffect(() => {
        retrieveVoyages();

    }, []);

    const retrieveVoyages = () => {
        VoyageDataService.getAll()
            .then(response => {
                console.log(response.data);
                setVoyages(response.data.voyages);

            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <div class="Box3">
                <h5 class="title">Mes Pays visités :</h5>
                {voyages.map((voyage) => {
                    return (
                        <p>{voyage.Pays}</p>
                    );
                })}
            </div>

        </div>

    );
};

export default ListeVoyages;
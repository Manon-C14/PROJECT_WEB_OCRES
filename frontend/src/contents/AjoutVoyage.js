import React, { useState, useEffect } from "react";
import VoyageDataService from "../services/voyages";
import { Link } from "react-router-dom";

const Voyage = props => {
    const [paysValue, setSearchPays] = useState("");
    const [dateAValue, setSearchDateA] = useState(new Date());
    const [dateRValue, setSearchDateR] = useState(new Date());
    const [raisonValue, setRaison] = useState("");


    const onChangePays = e => {
        const searchPays = e.target.value;
        setSearchPays(searchPays);
    };
    const onChangeDateA = e => {
        const searchPays = e.target.value;
        setSearchDateA(searchPays);
    };
    const onChangeDateR = e => {
        const searchPays = e.target.value;
        setSearchDateR(searchPays);
    };
    const onChangeRaison = e => {
        const searchPays = e.target.value;
        setRaison(searchPays);
    };



    const ajoutVoyage = (pays, dateArrivee, dateRetour, raison) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Pays: pays,
                DateArrivee: dateArrivee,
                DateRetour: dateRetour,
                Raison: raison
            })
        };
        fetch('http://localhost:5000/api/v1/voyages/newVoy', requestOptions)
            .then(response => response.json());
    };


    return (
        <div>
            <div className="row pb-1">


            </div>
            <div className="row">


                <div className="col-lg-4 pb-1">
                    <div className="card">
                        <div className="card-body">
                            <div className="input-group ">
                                <input

                                    type="text"
                                    className="form-control"
                                    placeholder="Pays"
                                    value={paysValue}
                                    onChange={onChangePays}
                                />
                            </div>
                            <div className="input-group ">
                                <input

                                    type="date"
                                    className="form-control"
                                    placeholder="Date"
                                    value={dateAValue}
                                    onChange={onChangeDateA}
                                />
                            </div>
                            <div className="input-group ">
                                <input

                                    type="date"
                                    className="form-control"
                                    placeholder="Date"
                                    value={dateRValue}
                                    onChange={onChangeDateR}
                                />
                            </div>
                            <div className="input-group ">
                                <input

                                    type="text"
                                    className="form-control"
                                    placeholder="Raison"
                                    value={raisonValue}
                                    onChange={onChangeRaison}
                                />
                            </div>
                            <Link to={"/voyages"} onClick={() => ajoutVoyage(paysValue, dateAValue, dateRValue, raisonValue)} className="btn btn-primary ">
                                Ajouter le voyage
                            </Link>
                        </div>
                    </div>
                </div>




            </div>


        </div>

    );
};

export default Voyage;
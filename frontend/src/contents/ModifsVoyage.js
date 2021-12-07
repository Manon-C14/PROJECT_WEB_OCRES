import React, { useState, useEffect } from "react";
import VoyageDataService from "../services/voyages";
import { Link } from "react-router-dom";

const Voyage = props => {
    const [voyages, setVoyages] = useState([]);
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









    const modifyVoyage = (voyageId, pays, dateArrivee, dateRetour, raison) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                voyage_id: voyageId,
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

                <div className="input-group col-lg-4">




                </div>


            </div>
            <div className="row">
                {voyages.map((voyage) => {
                    return (
                        <div className="col-lg-4 pb-1">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{voyage.Pays}</h5>
                                    <div className="input-group ">
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder={voyage.Pays}
                                            value={paysValue}
                                            onChange={onChangePays}
                                        />
                                    </div>
                                    <div className="input-group ">
                                        <input

                                            type="date"
                                            className="form-control"
                                            placeholder={voyage.DateArrivee}
                                            value={dateAValue}
                                            onChange={onChangeDateA}
                                        />
                                    </div>
                                    <div className="input-group ">
                                        <input

                                            type="date"
                                            className="form-control"
                                            placeholder={voyage.DateRetour}
                                            value={dateRValue}
                                            onChange={onChangeDateR}
                                        />
                                    </div>
                                    <div className="input-group ">
                                        <input

                                            type="text"
                                            className="form-control"
                                            placeholder={voyage.Raison}
                                            value={raisonValue}
                                            onChange={onChangeRaison}
                                        />
                                    </div>
                                    <Link to={"/voyages"} onClick={() => modifyVoyage(voyage._id, paysValue, dateAValue, dateRValue, raisonValue)} className="btn btn-primary ">
                                        Modifier le voyage
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}


            </div>


        </div>

    );
};

export default Voyage;
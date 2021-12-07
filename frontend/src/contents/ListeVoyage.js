import React, { useState, useEffect } from "react";
import VoyageDataService from "../services/voyages";
import { Link } from "react-router-dom";

const VoyagesList = props => {
    const [voyages, setVoyages] = useState([]);
    const [searchPays, setSearchPays] = useState("");
    const [searchRaison, setSearchRaison] = useState("");
    const [raisons, setRaison] = useState(["Toutes les raisons"]);

    useEffect(() => {
        retrieveVoyages();
        retrieveRaisons();
    }, []);

    const onChangeSearchPays = e => {
        const searchPays = e.target.value;
        setSearchPays(searchPays);
    };


    const onChangeSearchRaison = e => {
        const searchRaison = e.target.value;
        setSearchRaison(searchRaison);

    };

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

    const retrieveRaisons = () => {
        VoyageDataService.getRaisons()
            .then(response => {
                console.log(response.data);
                setRaison(["Toutes les raisons"].concat(response.data));

            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveVoyages();
    };

    const find = (query, by) => {
        VoyageDataService.find(query, by)
            .then(response => {
                console.log(response.data);
                setVoyages(response.data.voyages);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByPays = () => {
        find(searchPays, "Pays")
    };



    const findByRaison = () => {
        if (searchRaison === "Toutes les raisons") {
            refreshList();
        } else {
            find(searchRaison, "Raison")
        }
    };

    const deleteVoyage = (voyageId) => {
        fetch('http://localhost:5000/api/v1/voyages/newVoy?id=' + voyageId, { method: 'DELETE' })
            
        window.location.reload()
    };

    return (
        <div>
            <div className="row pb-1">

                <div className="input-group col-lg-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Chercher par pays"
                        value={searchPays}
                        onChange={onChangeSearchPays}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByPays}
                        >
                            Search
                        </button>
                    </div>
                    <select onChange={onChangeSearchRaison}>
                        {raisons.map(raison => {
                            return (
                                <option value={raison}> {raison.substr(0, 20)} </option>
                            )
                        })}
                    </select>
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByRaison}
                        >
                            Search
                        </button>
                    </div>

                    <Link to={"/ajout"} className="btn btn-outline-dark justify-content-center ">
                        Ajouter un voyage
                    </Link>
                    <Link to={"/modif"} className="btn btn-outline-dark justify-content-center ">
                        Modifier un voyage
                    </Link>


                </div>


            </div>
            <div className="row">
                {voyages.map((voyage) => {
                    const dates = `${voyage.DateArrivee} - ${voyage.DateRetour}`;
                    return (
                        <div className="col-lg-4 pb-1">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{voyage.Pays}</h5>
                                    <p className="card-text">
                                        <strong>Raison: </strong>{voyage.Raison}<br />
                                        <strong>Dates : </strong>{dates}
                                    </p>
                                    <div className="row">

                                        <Link to={"/voyages"} onClick={() => deleteVoyage(voyage._id)} className="btn btn-primary col-lg-5 mx-1 mb-1 ">
                                            Supprimer le voyage
                                        </Link>
                                    </div >


                                </div>
                            </div>
                        </div>
                    );
                })}


            </div>


        </div>

    );
};

export default VoyagesList;
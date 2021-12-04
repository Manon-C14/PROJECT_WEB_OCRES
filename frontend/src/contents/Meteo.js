import React from "react";
//import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "../contents/css/Meteo.css";
//import { gettdata } from "../contents/Recharts";
//import RechartSimpleBar from "../contents/Recharts";
import Example from "./ReactVis";



export default class Meteo extends React.Component{
    render(){
        return(
            <div className="Box5">     
                <input className="Input" id="city-input-weather" type="text" placeholder="Paris"/>
                <div className="ReactVis">
                    <Example/>
                </div>
            </div>
        )
    }
}

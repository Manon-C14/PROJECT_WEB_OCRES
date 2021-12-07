import React from "react";
import "../contents/css/Traduction.css";
import "../APIs/API_Traduction";

export default class Traduction extends React.Component{

    Traduire(){

        var url = "https://api-free.deepl.com/v2/translate";

        var XMLHttpRequest = require('xhr2');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        var i = document.form1.SelectLangue.selectedIndex; 
        var langue = document.form1.SelectLangue.options[i].value;
        var texte = document.getElementById('TexteTrad').value;

        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            //console.log(xhr.status);
            console.log(xhr.responseText);
            var jsonResponse = JSON.parse(xhr.responseText);
            
            document.getElementById('traduction').innerHTML = jsonResponse.translations[0].text;
            //document.getElementById('langues').innerHTML = jsonResponse.translations[0].detected_source_language;
        }};

        var data = "auth_key=741d710a-653d-a9c7-63ae-aa1a6924bff9:fx&text="+texte+"&target_lang="+langue+"";

        xhr.send(data);

    }

    render(){
        return(
            <div className="Box6">
                <div className="BoxTraduction">
                    <div className="colonne">
                        <p>Traduire en :</p>
                        <form name="form1" method="post" action="">
                            
                            <select id="SelectLangue" ></select>
                        </form>
                        <p>Votre texte :</p>
                        <textarea id="TexteTrad" name="TexteTrad" rows="5" cols="22"></textarea>
                        <button id ="Bouton" onClick={this.Traduire}>Traduire</button>
                    </div>
                    <div className="colonne">
                        <p>Traduction : <span  id="traduction"></span></p>
                    </div>
                </div>
            </div>
        )
    }

}



var url = "https://api-free.deepl.com/v2/languages";

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      var jsonResponse = JSON.parse(xhr.responseText);
      
      jsonResponse.forEach(function (object, i) {
            var opt = document.createElement('option');
            opt.value = object.language;
            opt.innerHTML = object.name;
            document.getElementById('SelectLangue').appendChild(opt);
            
      });
        
   }};

var data = "auth_key=741d710a-653d-a9c7-63ae-aa1a6924bff9:fx&type=target";

xhr.send(data);


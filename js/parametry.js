var listaMiernikowUrl = "https://molosapi.azurewebsites.net/api/v1/telemetry/FENEK01/last";

function getQuote1() {
  $.getJSON(listaMiernikowUrl, pokazMierniki);
}

function pokazMierniki(data) {
  var dataAddress = data.Data.DeviceTelemetryModels[0].Telemetries;
  var cpuTemp = dataAddress.cputemp;
  var odleglosc = dataAddress.odleglosc;
  var temp = dataAddress.temp;
  var tempDHT = dataAddress.tempDHT;
  var wilgotDHT = dataAddress.wilgotDHT;
  addBox(cpuTemp);
  addBox(odleglosc);
  addBox(temp);
  addBox(tempDHT);
  addBox(wilgotDHT);
}

function addBox(miernik) {
  var mainSection = document.getElementById('mainSection');
  var box = document.createElement('div');
  box.classList.add('box')
  var paragraph1 = document.createElement('p');
  paragraph1.classList.add('text1')
  var paragraph2 = document.createElement('p');
  paragraph2.classList.add('text2')
  var text1 = document.createTextNode(miernik.Description + ':')
  var text2 = document.createTextNode(miernik.Value + miernik.Unit)
  
  paragraph1.appendChild(text1);
  paragraph2.appendChild(text2);
  box.appendChild(paragraph1);
  box.appendChild(paragraph2);
  mainSection.appendChild(box);
}

$(document).ready(function () {
  getQuote1();
});
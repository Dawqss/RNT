
var pomiarostatnie2min = "https://molosapi.azurewebsites.net/api/v1/telemetry/FENEK01/2m";

function getData() {
  $.getJSON(pomiarostatnie2min, pokazPomiary);
}

function pokazPomiary(data) {
  var dataAddress = data.Data.DeviceTelemetryModels;

  dataAddress.map(function (item) {
    var test = item.Timestamp;
    var cputemp = item.Telemetries.cputemp;
    var odleglosc = item.Telemetries.odleglosc;
    var temp = item.Telemetries.temp;
    var wilgotDHT = item.Telemetries.wilgotDHT;

    addBox(test, cputemp, odleglosc, temp, wilgotDHT);
  });
}

function addBox(time, data1, data2, data3, data4) {
  var mainSection = document.getElementById('mainSection');
  var box = document.createElement('div');
  box.classList.add('box-other');
  var paragraph1 = document.createElement('p');
  paragraph1.classList.add('textHead');
  var paragraph2 = document.createElement('p');
  paragraph2.classList.add('text');
  var paragraph3 = document.createElement('p');
  paragraph3.classList.add('text');
  var paragraph4 = document.createElement('p');
  paragraph4.classList.add('text');
  var paragraph5 = document.createElement('p');
  paragraph5.classList.add('text');

  var text1 = document.createTextNode(time.substr(0, 10) + " " + time.substr(11, 8));
  var text2 = document.createTextNode(data1.Description + ': ' + data1.Value + data1.Unit);
  var text3 = document.createTextNode(data2.Description + ': ' + data2.Value + data2.Unit);
  var text4 = document.createTextNode(data3.Description + ': ' + data3.Value + data3.Unit);
  var text = document.createTextNode(data4.Description + ': ' + data4.Value + data4.Unit);

  paragraph1.appendChild(text1);
  paragraph2.appendChild(text2);
  paragraph3.appendChild(text3);
  paragraph4.appendChild(text4);
  paragraph5.appendChild(text);
  box.appendChild(paragraph1);
  box.appendChild(paragraph2);
  box.appendChild(paragraph3);
  box.appendChild(paragraph4);
  box.appendChild(paragraph5);
  mainSection.appendChild(box);
}

$(document).ready(function () {
  getData();
});
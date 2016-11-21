var wykazurzadzenimiernikow = "https://molosapi.azurewebsites.net/api/v1/devices";

function getQuote() {
  $.getJSON(wykazurzadzenimiernikow, pokazMierniki);
}

function pokazMierniki(data) {
  var dataAddress = data.Data;
  return dataAddress.map(function (item) {
  var device = item.DeviceProperties;
  addBox(device)
  });
}

function addBox(miernik) {
  var mainSection = document.getElementById('mainSection');
  var box = document.createElement('div');
  box.classList.add('box-models')
  var paragraph2 = document.createElement('p');
  var paragraph3 = document.createElement('p');
  var paragraph4 = document.createElement('p');
  var paragraph5 = document.createElement('p');
  var paragraph6 = document.createElement('p');
  var paragraph7 = document.createElement('p');
  var text2 = document.createTextNode('DeviceID: ' + miernik.DeviceID)
  var text3 = document.createTextNode('DeviceName: ' + miernik.DeviceName)
  var text4 = document.createTextNode('ModelNumber: ' + miernik.ModelNumber)
  var text5 = document.createTextNode('Platform: ' + miernik.Platform)
  var text6 = document.createTextNode('Processor: ' + miernik.Processor)
  var text7 = document.createTextNode('InstalledRAM: ' + miernik.InstalledRAM)
  
  paragraph2.appendChild(text2);
  paragraph3.appendChild(text3);
  paragraph4.appendChild(text4);
  paragraph5.appendChild(text5);
  paragraph6.appendChild(text6);
  paragraph7.appendChild(text7);
  box.appendChild(paragraph2);
  box.appendChild(paragraph3);
  box.appendChild(paragraph4);
  box.appendChild(paragraph5);
  box.appendChild(paragraph6);
  box.appendChild(paragraph7);
  mainSection.appendChild(box);
}

$(document).ready(function () {
  getQuote();
});
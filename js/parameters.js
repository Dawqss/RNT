var devicesList = "https://molosapi.azurewebsites.net/api/v1/telemetry/FENEK01/last";

function getData() {
  $.getJSON(devicesList, showDevices);
}

function showDevices(data) {
  var dataAddress = data.Data.DeviceTelemetryModels[0].Telemetries;
  var deviceParameters = ['cputemp', 'odleglosc', 'temp', 'tempDHT', 'wilgotDHT'];
  deviceParameters.forEach(function (item) {
    addBox(dataAddress[item]);
  })
}

function addBox(device) {
  var model = $('<div class="box"></div>');
  model.appendTo('.mainSection');

  var paragraph1 = $('<p class="text1">' + device.Description + ':' + '</p>');
  var paragraph2 = $('<p class="text2">' + device.Value + device.Unit + '</p>');

  model.appendTo('.mainSection');
  paragraph1.appendTo(model);
  paragraph2.appendTo(model);
}

$(document).ready(function () {
  getData();

  $('#sortable').sortable({
    change: function (event, ui) {
      ui.placeholder.css({ visibility: 'visible', boxShadow: 'none', border: '1px dotted grey', background: 'rgba(255, 255, 255, 0.5)' });
    },
    tolerance: 'touch',
    drop: function () {
      alert('delete!');
    }
  });
  $('#item').sortable();
});
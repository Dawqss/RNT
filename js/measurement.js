var measurementLast2Min = "https://molosapi.azurewebsites.net/api/v1/telemetry/FENEK01/2m";
 
function getData() {
  $.getJSON(measurementLast2Min, showMeasurement);
}
 
function showMeasurement(data) {
  var dataAddress = data.Data.DeviceTelemetryModels;
 
  dataAddress.map(function (item) {
    addBox(item.Timestamp, item.Telemetries.cputemp, item.Telemetries.odleglosc, item.Telemetries.temp, item.Telemetries.wilgotDHT);
  });
}
 
function addBox(time, data1, data2, data3, data4) {
  var model = $('<div class="box-other"></div>');
  var paragraph1 = $('<p class="textHead">' + time.substr(0, 10) + " " + time.substr(11, 8) + '</p>');
  var paragraph2 = $('<p class="textHead">' + data1.Description + ': ' + data1.Value + data1.Unit + '</p>');
  var paragraph3 = $('<p class="textHead">' + data2.Description + ': ' + data2.Value + data2.Unit + '</p>');
  var paragraph4 = $('<p class="textHead">' + data3.Description + ': ' + data3.Value + data3.Unit + '</p>');
  var paragraph5 = $('<p class="textHead">' + data4.Description + ': ' + data4.Value + data4.Unit + '</p>');
 
  model.appendTo('#mainSection');
  paragraph1.appendTo(model);
  paragraph2.appendTo(model);
  paragraph3.appendTo(model);
  paragraph4.appendTo(model);
  paragraph5.appendTo(model);
}
 
$(document).ready(function () {
  getData();
});
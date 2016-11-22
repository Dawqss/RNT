var equipmentList = "https://molosapi.azurewebsites.net/api/v1/devices";

function getData() {
  $.getJSON(equipmentList, showEequipment);
}

function showEequipment(data) {
  var dataAddress = data.Data;
  dataAddress.map(function (item) {
    var device = item.DeviceProperties;
    addBox(device)
  });
}

function addBox(equipment) {

  var model = $('<div class="box-models"></div>');
  model.appendTo('#mainSection');
  for (var variable in equipment) {
    model.append('<p>' + variable + ': ' + equipment[variable] + '<p>');
  }
}

$(document).ready(function () {
  getData();
});
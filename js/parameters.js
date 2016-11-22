var devicesList = "https://molosapi.azurewebsites.net/api/v1/telemetry/FENEK01/last";

function getData() {
    $.getJSON(devicesList, showDevices);
}

function showDevices(data) {
    var dataAddress = data.Data.DeviceTelemetryModels[0].Telemetries;
    var deviceParameters = ['cputemp', 'odleglosc', 'temp', 'tempDHT', 'wilgotDHT'];
    deviceParameters.forEach(function(item) {
        addBox(dataAddress[item]);
    })
    if (dataAddress.cputemp.Value > 37) {
        $('.box:nth-child(1)').css("background-color", "orange");}
    if (dataAddress.cputemp.Value > 41) {
        $('.box:nth-child(1)').css("background-color", "red");}
    if (dataAddress.temp.Value > 25) {
        $('.box:nth-child(3)').css("background-color", "orange");}
    if (dataAddress.temp.Value > 30) {
        $('.box:nth-child(3)').css("background-color", "red");}
    if (dataAddress.wilgotDHT.Value > 36) {
        $('.box:nth-child(5)').css("background-color", "orange");}
    if (dataAddress.wilgotDHT.Value > 41) {
        $('.box:nth-child(5)').css("background-color", "red");}
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

$(document).ready(function() {
    getData();

    $('#sortable').sortable({
        change: function(event, ui) {
            ui.placeholder.css({ visibility: 'visible', boxShadow: 'none', border: '1px dotted grey', background: 'rgba(255, 255, 255, 0.5)' });
        },
        tolerance: 'touch',
        drop: function() {
            alert('delete!');
        }
    });
    $('#item').sortable();
});
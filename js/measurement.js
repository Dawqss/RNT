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
	var paragraph2 = $('<p class="text">' + data1.Description + ': ' + data1.Value + data1.Unit + '</p>');
	if (data1.Value > 36) { paragraph2.css("background-color", "orange");}
	if (data1.Value > 40) { paragraph2.css("background-color", "red");}
	var paragraph3 = $('<p class="text">' + data2.Description + ': ' + data2.Value + data2.Unit + '</p>');
	var paragraph4 = $('<p class="text">' + data3.Description + ': ' + data3.Value + data3.Unit + '</p>');
	var paragraph5 = $('<p class="text">' + data4.Description + ': ' + data4.Value + data4.Unit + '</p>');
	if (data4.Value > 35) { paragraph5.css("background-color", "orange");}
	if (data4.Value > 40) { paragraph5.css("background-color", "red");}

	model.appendTo('.mainSection');
	paragraph1.appendTo(model);
	paragraph2.appendTo(model);
	paragraph3.appendTo(model);
	paragraph4.appendTo(model);
	paragraph5.appendTo(model);
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
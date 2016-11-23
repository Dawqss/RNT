var measurementLast2Min = "https://molosapi.azurewebsites.net/api/v1/telemetry/FENEK01/2m";

function getData() {
	$.getJSON(measurementLast2Min, showMeasurement);
}

function showMeasurement(data) {
	var dataAddress = data.Data.DeviceTelemetryModels;
	dataAddress.forEach(function (item) {
		var stat = item.Telemetries;
		addBox(item.Timestamp, stat.cputemp, stat.odleglosc, stat.temp, stat.wilgotDHT);
	});
}

function addBox(time, data1, data2, data3, data4) {
	var model = $('<div class="box-other"></div>');
	model.appendTo('.mainSection');

	var paragraph = $('<p class="text">' + time.substr(0, 10) + " " + time.substr(11, 8) + '</p>');
	paragraph.appendTo(model);

	[data1, data2, data3, data4].forEach(function (elem) {
		var paragraph = $('<p class="text">' + elem.Description + ': ' + elem.Value + elem.Unit + '</p>');
		paragraph.appendTo(model);
		alerts(elem.Value, 37, 41, paragraph);
	});
}

function alerts(data, midValue, maxValue, element) {
	if (data > midValue) { element.css("background-color", "orange"); }
	if (data > maxValue) { element.css("background-color", "red"); }
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
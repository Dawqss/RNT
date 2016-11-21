var measurementLast2hTemp = "https://molosapi.azurewebsites.net/api/v1/telemetry/charts?deviceId=FENEK01&telemetryName=temp&lastHour=1";

function getData() {
	$.getJSON(measurementLast2hTemp, showDevices);
}

function showDevices(data) {
	var tempTime = [];
	var tempValue = [];
	var dataAddress = data.Data.Items;

	dataAddress.map(function (item) {
		tempTime.push((item.x).substr(11, 5));
		tempValue.push(item.y);
	});

	new Chartist.Line('.ct-chart', {
		labels: tempTime,
		series: [
			tempValue
		]
	}, {
			chartPadding: 30,
			showArea: true,
			low: 0,
			high: 35,
			axisX: {
				labelInterpolationFnc: function skipLabels(value, index) {
					return index % 25 === 0 ? value : null;
				}
			},
			axisY: {
				labelInterpolationFnc: function skipLabels(value, index) {
					return index % 1 === 0 ? value : null;
				}
			}
		});
}

$(document).ready(function () {
	getData();
});
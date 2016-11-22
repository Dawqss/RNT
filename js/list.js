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
	model.appendTo('.mainSection');
	for (var variable in equipment) {
		model.append('<p>' + variable + ': ' + equipment[variable] + '<p>');
	}
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
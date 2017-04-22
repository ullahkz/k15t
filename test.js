$(document).ready(function(){

	var $newRow = $('#table>tbody>tr');
	console.log($newRow.length);
	$('#search2').keyup(function() {
	  var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase().split(' ');

	  $newRow.hide().filter(function() {
	    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
	    var matchesSearch = true;
	    $(val).each(function(index, value) {
	      matchesSearch = (!matchesSearch) ? false : ~text.indexOf(value);
	    });
	    return matchesSearch;
	  }).show();
	});

});
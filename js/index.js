$(document).ready(function(){
		var $rows = $('.list-unstyled>li');
		console.log('car list row' , $rows.length);
		$('#search').keyup(function() {
		  var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase().split(' ');

		  $rows.hide().filter(function() {
		    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
		    var matchesSearch = true;
		    $(val).each(function(index, value) {
		      matchesSearch = (!matchesSearch) ? false : ~text.indexOf(value);
		    });
		    return matchesSearch;
		  }).show();
		});

		// var $row2 = $('#table>tbody>tr');
		// $('#search2').keyup(function() {
		// 	var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
		// 	console.log(val);
		// 	$row2.show().filter(function() {
		// 		var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
		// 		//"g" Perform a global match (find all matches rather than stopping after the first match)
		// 		// For case sensitive match need to replace g with 'i' and remvoe 'toLowerCase()'
		// 		return !~text.indexOf(val);
		// 	}).hide();
		// });

		var $row3 = $('#tableStatic>tbody>tr');
		$('#search3').keyup(function() {
		  var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase().split(' ');

		  $row3.hide().filter(function() {
		    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
		    var matchesSearch = true;
		    $(val).each(function(index, value) {
		      matchesSearch = (!matchesSearch) ? false : ~text.indexOf(value);
		    });
		    return matchesSearch;
		  }).show();
		});


		var $newRow = $('#table>tbody>tr');
		console.log('dynamic table row' , $newRow.length);
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
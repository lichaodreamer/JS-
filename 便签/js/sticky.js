$(document).ready(function(){
showAllStickies();
$("#add_button").click(addStick);
$("#stickies li").dblclick(deleteSticky);
$("#clear_button").click(deleteAllStickies);
});
function addStick(){
	var date = new Date();
	var val = $("#note_text").val();
	var key = 'st_'+date.getTime();

	var totalKey = 'stickies';
	if(localStorage.getItem(totalKey)){
		var valObj = localStorage.getItem(key).parse;
		valObj.key = val;
		
	}else{
		valObj = new Object();
		valObj.key = val;
	}
	console.log(valObj)
	valStr = JSON.stringify(valObj);
	localStorage.setItem(totalKey,valStr);
	

	var span=$("<span class='sticky'></span>");
	span.text(val);
	var li = $("<li title='双击删除此标签'></li>");
	li.attr('id', key);
	li.append(span);
	$("#stickies").append(li);
}

function showAllStickies(){
	for(var i in localStorage){
		var span = $("<span class='sticky'></span>");
		span.text(localStorage[i]);
		var li = $("<li title='双击删除此标签'></li>");
		li.attr('id',i)
		li.append(span);
		$("#stickies").append(li);
	}
}

function deleteSticky(){
	localStorage.removeItem($(this).attr('id'));
	$(this).remove();
}

function deleteAllStickies(){
	localStorage.clear();
	$("#stickies").html('');
}
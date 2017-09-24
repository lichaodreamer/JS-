$(function(){
	  var n=0;
	  var window_width=$(document.body).width();
	  var dock_width=$("#bottom_dock").width();
	  var left=parseInt((window_width-dock_width)/2);
	  $("#bottom_dock").css("left",left);
  $("#bottom_dock>a").hover(
  function(){
	  n=$(this).index();
	  dock_big(n);
	  if(0==n)
	  {
		dock_big_lite(n+1);
	  }
	  else if($("#bottom_dock>a").length==n)
	  {
		dock_big_lite(n-1);
	  }
	  else
	  {
		dock_big_lite(n-1);
		dock_big_lite(n+1);
	  }
	  },

	function(){
	  dock_small(n);
	  if(0==n)
	  {
		dock_small(n+1);
	  }
	  else if($("#bottom_dock>a").length==n)
	  {
		dock_small(n-1);
	  }
	  else
	  {
		dock_small(n-1);
		dock_small(n+1);
	  }
	}
	);

	function dock_big(index){
	$("#bottom_dock>a>img").eq(index).stop(true,false).animate({"width":"128px","height":"128px"},"fast","swing" );
	$("#bottom_dock").stop(true,false).animate({"left":left-46},"fast","swing");
	}
	function dock_small(index){
	$("#bottom_dock>a>img").eq(index).stop(true,false).animate({"width":"64px","height":"64px"},"fast","swing"  );
	$("#bottom_dock").stop(true,false).animate({"left":left},"fast","swing");
	}
	function dock_big_lite(index){
	$("#bottom_dock>a>img").eq(index).stop(true,false).animate({"width":"96px","height":"96px"},"fast","swing" );
	}
  })  
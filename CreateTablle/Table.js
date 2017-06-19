function Table(nodeElement){
	this.nodeElement=nodeElement||document.body;
	this.Width=this.nodeElement.clientWidth;
	this.cellWidth=0;
}
Table.prototype={
	createTable:function(json){
		if(!json){
			throw "cuowxinxi"
		}else{
			this.cellWidth=(this.Width-json.col)/json.col;
			this.cssCon();
			for(var i=0;i<json.row;i++){
				var rowEle=document.createElement("div");
				rowEle.className="row"
				if(i%2==0){
					rowEle.className+=" double";
				}
				this.nodeElement.appendChild(rowEle);
				for(var j=0;j<json.col;j++){
					var colEle= document.createElement("div");
					colEle.className="col";
					rowEle.appendChild(colEle);
				}
			}
		}
	},
	cssCon : function(){
		var css= document.getElementsByTagName("style")[0];
		if(!css){
			css=document.creatrElement("style");
			document.head.appendChild(css);
		}
		css.innerText+=".row{width:100%;height:30px;background:#ecffff;}.double{background:#a6ffff}.col{height:30px;width:"+this.cellWidth+"px;float:left;border-left:1px solid #fff;}";
	}
};

var fontname;

chrome.extension.sendRequest({localstorage: "fontname"}, function(response) {
	fontname=response.fontname;
	
	//alert ("fontname is " + fontname);


var eType = new Array("body","a","table","tr","td","div","h1","h2","h3","h4","h5","h6","button","input","textarea","select","span","font","select","form","p","li","ul","ol","frame");

// This is the _original_ version of the extension 
// It only works run_at is document_idle or document_end
// doesn't work in frames on AJAX sites
// page comes up in original font first

/*
var obj ;
	for(var i=0;i<eType.length;++i){
		obj = document.getElementsByTagName(eType[i]);
			for(var j=0;j<obj.length;++j){
				obj[j].style.fontFamily = fontname;
			}
		obj = null;
	}
*/

//This is new version
//This should work on frames and AJAX sites
//Page comes up in new font
//Note: Don't just add stuff to innerHTML - it doesn't work
//  must use proper appendChild() function


var divNode = document.createElement("div");
divNode.innerHTML = '<style>*{font-family:' + fontname + ',sans-serif!important;}</style>';
var head = document.getElementsByTagName('head')[0];
head.appendChild(divNode);


// various tries to get CSS applied to 
// other frames where it wasn't working
// requires modifying manifest and adding jquery file
/*
for(var i=0;i<eType.length;++i){
    $(eType[i]).each(function(){
      $(this).css('fontFamily',fontname);
    });
}

/*
var frames=document.getElementsByTagName("iframe");
for (var f=0,max=frames.length;f<max;f++) {
  $("#" + f).contents().find("HEAD").append(divNode);
  for(var i=0;i<eType.length;++i){
    $("#" + f).$(eType[i]).each(function(){
      $(this).css('fontFamily','Ubuntu');
    });
  }
}
*/

}
);

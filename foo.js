
var fontname;

chrome.extension.sendRequest({localstorage: "fontname"}, function(response) {
	
	fontname=response.fontname;
	var divNode = document.createElement("div");
	divNode.innerHTML = '<style>*{font-family:' + fontname + ',sans-serif!important; font-weight: bold!important;}</style>';
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(divNode);
	
});

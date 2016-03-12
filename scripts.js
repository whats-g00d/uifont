// Saves options to localStorage.
function save_options() {
  var select = document.getElementsByName("font_name");
  localStorage["fontname"] = select.item(0).value;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var favorite = localStorage["fontname"];
  if (!favorite) {
    return;
  }
  var select = document.getElementsByName("font_name");
  select.item(0).value = favorite;
  /*
  var select = document.getElementById("color");
  for (var i = 0; i < select.children.length; i++) {
    var child = select.children[i];
    if (child.value == favorite) {
      child.selected = "true";
      break;
    }
  }
  */
}

chrome.extension.onRequest.addListener(
function(request, sender, sendResponse) {
if (request.localstorage == "fontname")
	sendResponse({fontname: localStorage["fontname"]});
else
	sendResponse({});
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("click-this").addEventListener("click", save_options);
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("click-this");
    // onClick's logic below:
    link.addEventListener('click', function() {
        save_options();
    });
});

document.addEventListener('DOMContentLoaded', function() {
  restore_options();
  
});

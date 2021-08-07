function save_options() {

  var select = document.getElementsByName("font_name");
  localStorage["fontname"] = select.item(0).value;
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved. Refresh the page to see the change.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 1500);

}


function restore_options() {

  chrome.storage.sync.get('fontname', (data) => {

    if (!data.fontname) {
    return;
  }
  
  var input = document.getElementById("font_name");
    
  if (input) {
      input.value = data.fontname;
    }

  });

  chrome.storage.sync.get('exceptions', (data) => {

    var exceptions = data.exceptions;

    if (!exceptions) {
      return;
    }

    var urls = document.getElementById("urls");
    var count = 0;

    exceptions.forEach(element => {

      var option = document.createElement("option");
      option.text = element;
      option.value = count;

      if (urls) {
        urls.add(option);
  }

      count++;

    });

  });

  

}

chrome.extension.onRequest.addListener(
function(request, sender, sendResponse) {

  if (request.localstorage == "fontname")
    sendResponse({fontname: localStorage["fontname"]});
  else
    sendResponse({});

});

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById("click-this");
  if (link != undefined) {
    link.addEventListener('click', function() {save_options();});
  }
  // document.getElementById("click-this").addEventListener("click", save_options);
});

document.addEventListener('DOMContentLoaded', function() {

  var link = document.getElementById("click-this");
  if (link != undefined) {
    link.addEventListener('click', function() {save_options;});
  }

});

document.addEventListener('DOMContentLoaded', function() {
  restore_options();
});

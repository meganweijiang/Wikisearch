// Listen for submitButton click event
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitButton").addEventListener("click", initiateSearch);
});


// Function to open search in new tab
function initiateSearch(){
  var search = document.getElementById("entry").value;
  search = search.replace(/[^\w\s']/gi, "").replace(" ", "_").replace("'", "%27");
  var link = "http://en.wikipedia.org/wiki/".concat(search);
  chrome.tabs.create(  
  {
     url: link
  });
}
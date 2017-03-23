document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitButton").addEventListener("click", initiateSearch);
});

function initiateSearch(){

  var search = document.getElementById("entry").value;
  search.replace(" ", "_");
  var link = "http://en.wikipedia.org/wiki/".concat(search);
  chrome.tabs.create(  
  {
     url: link
  });
}
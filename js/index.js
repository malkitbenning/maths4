// Buttons
var sameTestButton = document.getElementById("same-test-btn");
var newTestButton = document.getElementById("new-test-btn");

sameTestButton.addEventListener("click", function(){
  window.location.href = "test.html";
});


newTestButton.addEventListener("click", function() {
  localStorage.clear();
  window.location.href = "test.html";
});

var myInput = document.getElementById("input_text");
var editButton = document.getElementById("btEdit");

editButton.addEventListener("click", function () {
  var newValue = myInput.value;
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", "http://127.0.0.1:5500/main/product.html");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("Data saved successfully");
    }
  };
  xhr.send(JSON.stringify({ value: newValue }));
});

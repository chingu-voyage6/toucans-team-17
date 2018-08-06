function addValue() {
  var numOfOrder = parseInt(document.getElementById("numOfOrder").value);
  numOfOrder++;
  document.getElementById("numOfOrder").value = numOfOrder.toString();
}

function minsValue() {
  var numOfOrder = parseInt(document.getElementById("numOfOrder").value);
  if (numOfOrder <= 0) {
    numOfOrder = 0;
  } else {
    numOfOrder--;
  }
  document.getElementById("numOfOrder").value = numOfOrder.toString();
}

function getOrder() {
  alert("Order added!");
}

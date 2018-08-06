function addValue(id) {
  var numOfOrder = parseInt(document.getElementById(id).value);
  numOfOrder++;
  document.getElementById(id).value = numOfOrder.toString();
}

function minsValue(id) {
  var numOfOrder = parseInt(document.getElementById(id).value);
  if (numOfOrder <= 0) {
    numOfOrder = 0;
  } else {
    numOfOrder--;
  }
  document.getElementById(id).value = numOfOrder.toString();
}

function getOrder() {
  alert("Order added!");
}

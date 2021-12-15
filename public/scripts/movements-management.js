const filterProductIdElement = document.getElementById('productId');
const filterDateStartElement = document.getElementById('dateStart');
const filterDateEndElement = document.getElementById('dateEnd');
const filterFlowElement = document.getElementById('flow');
const filterClientElement = document.getElementById('client');
const filterStatusElement = document.getElementById('status');

const movementsElements = document.querySelectorAll('tbody tr');

console.log(movementsElements);

const movementsArray = Array.from(movementsElements);

console.log(movementsArray);

const filterProductIdElement = document.getElementById('productId');
const filterDateStartElement = document.getElementById('dateStart');
const filterDateEndElement = document.getElementById('dateEnd');
const filterFlowElement = document.getElementById('flow');
const filterClientElement = document.getElementById('client');
const filterStatusElement = document.getElementById('status');

const movementsElements = document.querySelectorAll('tbody tr');

const movementsArray = Array.from(movementsElements);

const filters = {};

function applyFilters() {
  for (const row of movementsArray) {
    if (
      (filters.productId &&
        row.getElementsByTagName('td')[1].textContent.trim() !==
          filters.productId) ||
      (filters.client &&
        row.getElementsByTagName('td')[2].textContent.trim() !==
          filters.client) ||
      (filters.flow &&
        row.getElementsByTagName('td')[3].textContent.trim() !==
          filters.flow) ||
      (filters.status &&
        row.getElementsByTagName('td')[4].textContent.trim() !== filters.status)
    ) {
      row.style.display = 'none';
    } else {
      row.style.display = 'table-row';
    }
  }
  console.log(movementsArray);
}

filterProductIdElement.addEventListener('input', (e) => {
  filters.productId = e.target.value;
  applyFilters();
});

filterFlowElement.addEventListener('input', (e) => {
  filters.flow = e.target.value;
  applyFilters();
});

filterClientElement.addEventListener('input', (e) => {
  filters.client = e.target.value;
  applyFilters();
});

filterStatusElement.addEventListener('input', (e) => {
  filters.status = e.target.value;
  applyFilters();
});

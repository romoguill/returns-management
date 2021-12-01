const tableMovements = document.querySelector('#table__movements tbody');

function populateTestMovements() {
  for (let movement of testMovements) {
    const tableRowElement = document.createElement('tr');

    tableRowElement.innerHTML = `
      <td>${movement.id}</td>
      <td>${movement.productId}</td>
      <td>${movement.origin}</td>
      <td>${movement.destination}</td>
      <td>${movement.date}</td>
      `;

    tableMovements.appendChild(tableRowElement);
  }
}

populateTestMovements();

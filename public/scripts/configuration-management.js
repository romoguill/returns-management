const clientFilterElement = document.getElementById('client-filter');
const rowsElements = document.querySelectorAll('tbody tr');

let rowsArray = Array.from(rowsElements);
console.log(rowsArray);

const tbodyElement = document.querySelector('tbody');

// Create delete handler for each config profile
async function deleteProfile(btn) {
  const response = await fetch(
    `/configuration/api/profiles/${btn.dataset.profileid}/delete`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    alert("Couldn't delete profile, try again later");
  }

  // Remove the table row from the DOM
  const deletedElement = btn.parentElement.parentElement.parentElement.remove();
  console.log(deletedElement);
}

// Apply delete to all elements
function addDeleteFunctionality() {
  const deleteConfigurationProfileBtnElements = document.querySelectorAll(
    '.btn__delete-client-profile'
  );
  deleteConfigurationProfileBtnElements.forEach((btn) => {
    btn.addEventListener('click', () => deleteProfile(btn));
  });
}

function filterByClient(e) {
  const client = e.target.value;

  const filteredRows = rowsArray.filter((row) => {
    return row.firstElementChild.textContent
      .trim()
      .toLowerCase()
      .includes(client.toLowerCase());
  });

  let filteredClientTemplate = '';
  filteredRows.forEach((row) => {
    filteredClientTemplate += `
      <tr>
        <td>
          ${row.children[0].textContent.trim()}
        </td>
        <td>
          ${row.children[1].textContent.trim()}
        </td>
        <td>
          ${row.children[2].textContent.trim()}
        </td>
        <td>
          ${row.children[3].textContent.trim()}
        </td>
        <td>
          ${row.children[4].textContent.trim()}
        </td>
        <td>
          ${row.children[5].textContent.trim()}
        </td>
        <td>
          ${row.children[6].textContent.trim()}
        </td>
        <td>
          ${row.children[7].innerHTML}
        </td>
      </tr>
    `;
  });

  // Inject the template with the filtered rows
  tbodyElement.innerHTML = filteredClientTemplate;

  // Since btn are re rendered, the event listeners must be associated again
  addEditFunctionality();
  addDeleteFunctionality();
}

// Call to give the trash btn the delete functionality
addDeleteFunctionality();

clientFilterElement.addEventListener('input', (e) => filterByClient(e));

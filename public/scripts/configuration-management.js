const deleteConfigurationProfileBtnElements = document.querySelectorAll(
  '.btn__delete-client-profile'
);

const clientFilterElement = document.getElementById('client-filter');
const rowsElements = document.querySelectorAll('tbody tr');
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
  btn.parentElement.parentElement.parentElement.remove();
}

// Apply delete to all elements
deleteConfigurationProfileBtnElements.forEach((btn) => {
  btn.addEventListener('click', () => deleteProfile(btn));
});

function filterByClient(e) {
  const client = e.target.value;
  const rowsArray = Array.from(rowsElements);

  const filteredRows = rowsArray.filter((row) => {
    return row.firstElementChild.textContent
      .trim()
      .toLowerCase()
      .includes(client.toLowerCase());
  });

  console.log(filteredRows);

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
          ${row.children[7].textContent.trim()}
        </td>
      </tr>
    `;

    tbodyElement.innerHTML = filteredClientTemplate;
  });
}

clientFilterElement.addEventListener('input', (e) => filterByClient(e));

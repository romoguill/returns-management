const tableConfigurationElement = document.getElementById(
  'table__configuration'
);

// Renders the HTML of rows for each profile
async function renderProfiles() {
  // Get the profiles stored in DB
  const clientProfiles = await getAllProfiles();

  tableConfigurationElement.innerHTML = '';

  let templateRows = `
    <span class="table__header">Client</span>
    <span class="table__header">Container Warning</span>
    <span class="table__header">Container Max</span>
    <span class="table__header">Bulk Warning</span>
    <span class="table__header">Bulk Max</span>
    <span class="table__header">Cart Warning</span>
    <span class="table__header">Cart Max</span>
    <span id="table__last-header" class="table__header"></span>
  `;

  clientProfiles.forEach((profile) => {
    templateRows += `
      <span>${profile.client}</span>
      <span>${profile.config.container.warning}</span>
      <span>${profile.config.container.max}</span>
      <span>${profile.config.bulk.warning}</span>
      <span>${profile.config.bulk.max}</span>
      <span>${profile.config.cart.warning}</span>
      <span>${profile.config.cart.max}</span>

      <div class="btn__edit-delete">
        <button
          class="btn__edit-client-profile"
          data-profileid="${profile._id}"
        >
          <i class="fas fa-edit"></i>
        </button>
        <button
          class="btn__delete-client-profile"
          data-profileid="${profile._id}"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
  });

  tableConfigurationElement.innerHTML = templateRows;

  // Add the event listener for every trash icon
  addDeleteFunctionality();
}

function addDeleteFunctionality() {
  const btnsDeleteElements = tableConfigurationElement.querySelectorAll(
    '.btn__delete-client-profile'
  );

  btnsDeleteElements.forEach((btn) => {
    btn.addEventListener('click', async () => {
      detleteProfile(btn);
      renderProfiles();
    });
  });
}

renderProfiles();

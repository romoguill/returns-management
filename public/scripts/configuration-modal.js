// Elements for modal
const modalElement = document.getElementById('form__modal');
const btnOpenElement = document.getElementById('button__create-config');
const btnCancelElement = document.getElementById('btn-cancel');
const backdropElement = document.getElementById('backdrop');

// Inputs from the form. Used to pre populate the edit functionality
const clientInputElement = document.getElementById('client');
const containerWarningElement = document.getElementById('containerWarning');
const containerMaxElement = document.getElementById('containerMax');
const bulkWarningElement = document.getElementById('bulkWarning');
const bulkMaxElement = document.getElementById('bulkMax');
const cartWarningElement = document.getElementById('cartWarning');
const cartMaxElement = document.getElementById('cartMax');

// Add event listener to the "plus btn" to open the modal form
btnOpenElement.addEventListener('click', () => {
  modalElement.style.display = 'block';
  backdropElement.style.display = 'block';
});

// for each edit btn icon open the same modal form
function addEditFunctionality() {
  const btnsEditElements = document.querySelectorAll(
    '.btn__edit-client-profile'
  );
  btnsEditElements.forEach((btn) => {
    console.log('adding edit');
    btn.addEventListener('click', () => {
      // Use the data already stored to populate the form
      const clientProfileId = btn.dataset.profileid;    

      prePopulateForm(clientProfileId);
      adaptFormForEditing(clientProfileId);

      modalElement.style.display = 'block';
      backdropElement.style.display = 'block';
    });
  });
}

btnCancelElement.addEventListener('click', () => {
  modalElement.style.display = 'none';
  backdropElement.style.display = 'none';
});

backdropElement.addEventListener('click', () => {
  modalElement.style.display = 'none';
  backdropElement.style.display = 'none';
});

// Get the info stored via AJAX call to api and populate form
async function prePopulateForm(clientProfileId) {
  const response = await fetch(
    `/configuration/api/profiles/${clientProfileId}`
  );
  const { client, config } = await response.json();

  clientInputElement.value = client;
  containerWarningElement.value = config.containerWarning;
  containerMaxElement.value = config.containerMax;
  bulkWarningElement.value = config.bulkWarning;
  bulkMaxElement.value = config.bulkWarning;
  cartWarningElement.value = config.cartWarning;
  cartMaxElement.value = config.cartMax;
}

// Reuse the form for adding a profile, to also be capable of editing an existing one
function adaptFormForEditing(clientProfileId) {
  const btnElement = modalElement.querySelector('.btn-primary');
  btnElement.textContent = 'Edit profile';

  modalElement.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Prepare the request body to be sent via AJAX
    const client = clientInputElement.value;
    const config = {
      containerWarning: containerWarningElement.value,
      containerMax: containerMaxElement.value,
      bulkWarning: bulkWarningElement.value,
      bulkMax: bulkMaxElement.value,
      cartWarning: cartWarningElement.value,
      cartMax: cartMaxElement.value,
    };

    await fetch(`/configuration/api/profiles/${clientProfileId}/edit`, {
      method: 'PATCH',
      body: JSON.stringify({
        client,
        config,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    location.reload();
  });
}

// Call to add the event listener to the edit buttons
addEditFunctionality();

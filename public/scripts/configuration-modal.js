// Elements for modal
const modalElement = document.getElementById('form__modal');
const btnOpenElement = document.getElementById('button__create-config');
const btnsEditElements = document.querySelectorAll('.btn__edit-client-profile');
const btnCancelElement = document.getElementById('btn-cancel');
const backdropElement = document.getElementById('backdrop');

// Inputs from the form. Used to pre populate the edit functionality
const clientInputElement = document.getElementById('client');
const containerWarningInputElement =
  document.getElementById('containerWarning');
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
btnsEditElements.forEach((btn) => {
  btn.addEventListener('click', () => {
    prePopulateForm(btn);
    modalElement.style.display = 'block';
    backdropElement.style.display = 'block';
  });
});

btnCancelElement.addEventListener('click', () => {
  modalElement.style.display = 'none';
  backdropElement.style.display = 'none';
});

backdropElement.addEventListener('click', () => {
  modalElement.style.display = 'none';
  backdropElement.style.display = 'none';
});

async function prePopulateForm(btn) {
  const clientProfileId = btn.dataset.profileid;

  const response = await fetch(
    `/configuration/api/profiles/${clientProfileId}`
  );
  const { client, config } = await response.json();

  clientInputElement.value = client;
  containerWarningInputElement.value = config.containerWarning;
  containerMaxElement.value = config.containerMax;
  bulkWarningElement.value = config.bulkWarning;
  bulkMaxElement.value = config.bulkWarning;
  cartWarningElement.value = config.cartWarning;
  cartMaxElement.value = config.cartMax;
}

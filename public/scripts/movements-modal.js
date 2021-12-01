const modalElement = document.getElementById('form__modal');
const btnOpenElement = document.getElementById('button__create-movement');
const btnCancelElement = document.getElementById('btn-cancel');
const backdropElement = document.getElementById('backdrop');

btnOpenElement.addEventListener('click', () => {
  modalElement.style.display = 'block';
  backdropElement.style.display = 'block';
});

btnCancelElement.addEventListener('click', () => {
  modalElement.style.display = 'none';
  backdropElement.style.display = 'none';
});

backdropElement.addEventListener('click', () => {
  modalElement.style.display = 'none';
  backdropElement.style.display = 'none';
});

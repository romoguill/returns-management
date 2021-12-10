const deleteConfigurationProfileBtnElements = document.querySelectorAll(
  '.btn__delete-client-profile'
);

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

deleteConfigurationProfileBtnElements.forEach((btn) => {
  btn.addEventListener('click', () => deleteProfile(btn));
});

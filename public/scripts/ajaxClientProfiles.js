async function detleteProfile(btn) {
  await fetch(`/configuration/api/profiles/${btn.dataset.profileid}/delete`, {
    method: 'DELETE',
  });
  console.log('deleted');
}

async function getAllProfiles() {
  const response = await fetch('/configuration/api/profiles');
  const profiles = await response.json();
  return profiles;
}

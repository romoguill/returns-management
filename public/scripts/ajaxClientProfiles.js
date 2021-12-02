async function getAllConfigurations() {
  const response = await fetch('/configuration/api/profiles');
  const profiles = await response.json();
  return profiles;
}

getAllConfigurations().then((profiles) => {
  console.log(profiles);
});

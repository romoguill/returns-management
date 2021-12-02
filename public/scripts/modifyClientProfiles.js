// const tableElement = document.getElementById('table__configuration');

// let clientProfiles;

// function addEventListenerToButtons(btn) {
//   btn.addEventListener('click', async (e) => {
//     const profileId = e.currentTarget.dataset.profileid;
//     const response = await fetch(`/configuration/${profileId}/delete`, {
//       method: 'POST',
//     });
//     clientProfiles = await response.json();
//     renderClientProfiles(clientProfiles);
//   });
// }

// function renderClientProfiles(clientProfiles) {
//   let template = `
//     <span class="table__header">Client</span>
//     <span class="table__header">Container Warning</span>
//     <span class="table__header">Container Max</span>
//     <span class="table__header">Bulk Warning</span>
//     <span class="table__header">Bulk Max</span>
//     <span class="table__header">Cart Warning</span>
//     <span class="table__header">Cart Max</span>
//     <span id="table__last-header" class="table__header"></span>
//   `;

//   for (const profile of clientProfiles) {
//     template += `
//       <span>${profile.client}</span>
//       <span>${profile.config.container.warning}</span>
//       <span>${profile.config.container.max}</span>
//       <span>${profile.config.bulk.warning}</span>
//       <span>${profile.config.bulk.max}</span>
//       <span>${profile.config.cart.warning}</span>
//       <span>${profile.config.cart.max}</span>

//       <div class="btn__edit-delete">
//         <button
//           class="btn__edit-client-profile"
//           data-profileid="${profile._id}"
//         >
//           <i class="fas fa-edit"></i>
//         </button>
//         <button
//           class="btn__delete-client-profile"
//           data-profileid="${profile._id}"
//         >
//           <i class="fas fa-trash"></i>
//         </button>
//       </div>
//     `;
//   }
//   tableElement.innerHTML = template;

//   const btnDeleteClientProfileElements = document.querySelectorAll(
//     '.btn__delete-client-profile'
//   );

//   btnDeleteClientProfileElements.forEach((btn) => {
//     addEventListenerToButtons(btn);
//   });
// }

// clientProfiles = fetch(`/configuration/${profileId}/delete`, {
//   method: 'POST',
// }).then((response) => response.json());

// renderClientProfiles(clientProfiles);

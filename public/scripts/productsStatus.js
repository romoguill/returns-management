function calculateClientDelay(clientName, movements) {
  /* 
  Returns an array of products and the status (delay in days)
  */

  // Get the movements of the particular client
  const clientMovements = movements.filter((movement) => {
    return (
      movement.origin === clientName || movement.destination === clientName
    );
  });
}

const testMovements = [
  {
    id: 1,
    productId: '001',
    origin: 'warehouse',
    destination: 'client A',
    date: '2020-04-12',
  },
  {
    id: 2,
    productId: '002',
    origin: 'warehouse',
    destination: 'client A',
    date: '2020-04-15',
  },
  {
    id: 3,
    productId: '003',
    origin: 'warehouse',
    destination: 'client B',
    date: '2020-04-15',
  },
  {
    id: 4,
    productId: '004',
    origin: 'warehouse',
    destination: 'client C',
    date: '2020-04-22',
  },
  {
    id: 5,
    productId: '005',
    origin: 'warehouse',
    destination: 'client C',
    date: '2020-04-30',
  },
  {
    id: 6,
    productId: '002',
    origin: 'client A',
    destination: 'warehouse',
    date: '2020-05-15',
  },
  {
    id: 7,
    productId: '001',
    origin: 'client A',
    destination: 'warehouse',
    date: '2020-05-20',
  },
  {
    id: 8,
    productId: '004',
    origin: 'client C',
    destination: 'warehouse',
    date: '2020-05-27',
  },
  {
    id: 9,
    productId: '005',
    origin: 'client C',
    destination: 'warehouse',
    date: '2020-05-30',
  },
  {
    id: 10,
    productId: '002',
    origin: 'warehouse',
    destination: 'client A',
    date: '2020-06-01',
  },
];

const testConfiguration = [
  {
    clientName: 'client A',
    phone: 45334534,
    emails: ['mail1@clienta.com', 'mail2@clienta.com'],
    config: {
      pallet: {
        delayAllowed: 25,
        delayWarning: 20,
      },
      container: {
        delayAllowed: 45,
        delayWarning: 30,
      },
      carts: {
        delayAllowed: 10,
        delayWarning: 8,
      },
    },
  },
  {
    clientName: 'client B',
    phone: 45756823,
    emails: ['mail1@clientb.com', 'mail2@clientb.com', 'mail3@clientb.com'],
    config: {
      pallet: {
        delayAllowed: 22,
        delayWarning: 16,
      },
      container: {
        delayAllowed: 60,
        delayWarning: 53,
      },
      carts: {
        delayAllowed: 4,
        delayWarning: 2,
      },
    },
  },
  {
    clientName: 'client B',
    phone: 46342344,
    emails: ['mail1@clientc.com'],
    config: {
      pallet: {
        delayAllowed: 17,
        delayWarning: 14,
      },
      container: {
        delayAllowed: 41,
        delayWarning: 35,
      },
      carts: {
        delayAllowed: 12,
        delayWarning: 10,
      },
    },
  },
];

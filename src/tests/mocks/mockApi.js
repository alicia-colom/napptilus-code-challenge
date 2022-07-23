const catalogueResponse = [
  {
    id: 'ZmGrkLRPXOTpxsU4jjAcv',
    brand: 'Acer',
    model: 'Iconia Talk S',
    price: '170',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
  },
  {
    id: 'cGjFJlmqNPIwU59AOcY8H',
    brand: 'Acer',
    model: 'Liquid Z6 Plus',
    price: '250',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg',
  },
  {
    id: '8hKbH2UHPM_944nRHYN1n',
    brand: 'Acer',
    model: 'Liquid Z6',
    price: '120',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg',
  },
  {
    id: 'xyPoqGJxYR4Nn3yVGQcfI',
    brand: 'Acer',
    model: 'Iconia Tab 10 A3-A40',
    price: '230',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/xyPoqGJxYR4Nn3yVGQcfI.jpg',
  },
  {
    id: 'ND1elEt4nqZrCeFflDUZ2',
    brand: 'Acer',
    model: 'Liquid X2',
    price: '230',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ND1elEt4nqZrCeFflDUZ2.jpg',
  },
  {
    id: 'pMZMhe_ZaAPZoaCCtlDrg',
    brand: 'Acer',
    model: 'Liquid Jade 2',
    price: '',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/pMZMhe_ZaAPZoaCCtlDrg.jpg',
  },
  {
    id: 'ke-gsQbO8qH9PQ-zcdiAJ',
    brand: 'Acer',
    model: 'Liquid Zest Plus',
    price: '200',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ke-gsQbO8qH9PQ-zcdiAJ.jpg',
  },
  {
    id: 'meQvyTcXACAwWn3wCKSw6',
    brand: 'Acer',
    model: 'Liquid Zest',
    price: '110',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/meQvyTcXACAwWn3wCKSw6.jpg',
  },
  {
    id: 'qSyO-2wbNUssUhBb2waew',
    brand: 'Acer',
    model: 'Predator 8',
    price: '350',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/qSyO-2wbNUssUhBb2waew.jpg',
  },
  {
    id: 'P2oqviM96_ozwsgZkj9Xf',
    brand: 'Acer',
    model: 'Liquid Jade Primo',
    price: '220',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/P2oqviM96_ozwsgZkj9Xf.jpg',
  },
  {
    id: 'ypkE9xhckmUbS1UJRm5dS',
    brand: 'Acer',
    model: 'Liquid Z330',
    price: '110',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/ypkE9xhckmUbS1UJRm5dS.jpg',
  },
  {
    id: '80vJ3yDbtzNIgn_I8Y2m_',
    brand: 'Acer',
    model: 'Liquid Z320',
    price: '90',
    imgUrl:
      'https://front-test-api.herokuapp.com/images/80vJ3yDbtzNIgn_I8Y2m_.jpg',
  },
];

const productDetailsResponse = {
  id: '8hKbH2UHPM_944nRHYN1n',
  brand: 'Acer',
  model: 'Liquid Z6',
  price: '120',
  imgUrl:
    'https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg',
  networkTechnology: 'GSM / HSPA / LTE',
  networkSpeed: 'HSPA  LTE',
  gprs: 'Yes',
  edge: 'Yes',
  announced: '2016  August',
  status: 'Available. Released 2016  December',
  dimentions: '-',
  weight: '',
  sim: ['Single SIM (Micro-SIM) or Dual SIM (Micro-SIM', 'dual stand-by)'],
  displayType: 'IPS LCD capacitive touchscreen  16M colors',
  displayResolution: '5.0 inches',
  displaySize: '720 x 1280 pixels (~294 ppi pixel density)',
  os: 'Android 6.0 (Marshmallow)',
  cpu: 'Quad-core 1.25 GHz Cortex-A53',
  chipset: 'Mediatek MT6737',
  gpu: 'Mali-T720MP2',
  externalMemory: 'microSD  up to 256 GB',
  internalMemory: ['8 GB'],
  ram: '1 GB RAM',
  primaryCamera: ['8 MP', 'autofocus', 'LED flash'],
  secondaryCmera: '2 MP',
  speaker: 'Yes',
  audioJack: 'Yes',
  wlan: 'Yes',
  bluetooth: 'Yes',
  gps: 'Yes with A-GPS',
  nfc: '',
  radio: 'FM radio',
  usb: 'microUSB 2.0',
  sensors: ['Accelerometer', 'proximity'],
  battery: 'Removable Li-Ion 2000 mAh battery',
  colors: ['Black', 'White'],
  options: {
    colors: [
      {
        code: 1000,
        name: 'Black',
      },
      {
        code: 1001,
        name: 'White',
      },
    ],
    storages: [
      {
        code: 2000,
        name: '8 GB',
      },
    ],
  },
};

export default async function mockApi(url) {
  switch (url) {
    case 'https://front-test-api.herokuapp.com/api/product': {
      return {
        ok: true,
        status: 200,
        json: async () => catalogueResponse,
      };
    }

    case 'https://front-test-api.herokuapp.com/api/product/8hKbH2UHPM_944nRHYN1n': {
      return {
        ok: true,
        status: 200,
        json: async () => productDetailsResponse,
      };
    }

    default: {
      throw new Error(`Unhandled request: ${url}`);
    }
  }
}

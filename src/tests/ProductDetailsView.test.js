import React from 'react';
import { render, screen } from '@testing-library/react';
import waitForExpect from 'wait-for-expect';
import mockApi from './mocks/mockApi';
import ProductDetailsView from '../views/ProductDetailsView';

const productInfo = {
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

beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation(mockApi);
});

afterEach(() => {
  jest.restoreAllMocks();
});

const mockProductSpecifications = jest.fn();
jest.mock(
  '../components/ProductSpecifications',
  () =>
    function (props) {
      mockProductSpecifications(props);
      return <mock-productSpecifications />;
    },
);

const mockProductCustomization = jest.fn();
jest.mock(
  '../components/ProductCustomization',
  () =>
    function (props) {
      mockProductCustomization(props);
      return <mock-productCustomization />;
    },
);

test('when product details view is render, product basic info is shown', async () => {
  render(
    <ProductDetailsView
      selectedProductId={productInfo.id}
      setTerm={() => undefined}
      setIsLoading={() => undefined}
      setCurrentPage={() => undefined}
      setCartCount={() => undefined}
    />,
  );

  await waitForExpect(() => {
    expect(screen.findByText(productInfo.brand));
    expect(screen.findByText(productInfo.model));
    expect(screen.findByText(productInfo.price));
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

test('when product details view is render, product description info is rendered', async () => {
  render(
    <ProductDetailsView
      selectedProductId={productInfo.id}
      setTerm={() => undefined}
      setIsLoading={() => undefined}
      setCurrentPage={() => undefined}
      setCartCount={() => undefined}
    />,
  );

  await waitForExpect(() => {
    expect(mockProductSpecifications).toHaveBeenCalledTimes(1);
  });
});

test('when product details view is render, product customization info is rendered', async () => {
  render(
    <ProductDetailsView
      selectedProductId={productInfo.id}
      setTerm={() => undefined}
      setIsLoading={() => undefined}
      setCurrentPage={() => undefined}
      setCartCount={() => undefined}
    />,
  );

  await waitForExpect(() => {
    expect(mockProductCustomization).toHaveBeenCalledTimes(1);
  });
});

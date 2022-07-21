import React from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';
import ProductDescription from '../components/ProductDescription';
import ProductActions from '../components/ProductActions';
import { getProductDetail } from '../api';

const FAKE_PRODUCT_DETAIL = {
  id: 'ZmGrkLRPXOTpxsU4jjAcv',
  brand: 'Acer',
  model: 'Iconia Talk S',
  price: '170',
  imgUrl:
    'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
  networkTechnology: 'GSM / HSPA / LTE',
  networkSpeed: 'HSPA 42.2/11.5 Mbps  LTE Cat4 150/50 Mbps',
  gprs: 'Yes',
  edge: 'Yes',
  announced: '2016  August',
  status: 'Available. Released 2016  October',
  dimentions: '191.7 x 101 x 9.4 mm (7.55 x 3.98 x 0.37 in)',
  weight: '260',
  sim: 'Dual SIM (Micro-SIM/Nano-SIM)',
  displayType: 'IPS LCD capacitive touchscreen  16M colors',
  displayResolution: '7.0 inches (~69.8% screen-to-body ratio)',
  displaySize: '720 x 1280 pixels (~210 ppi pixel density)',
  os: 'Android 6.0 (Marshmallow)',
  cpu: 'Quad-core 1.3 GHz Cortex-A53',
  chipset: 'Mediatek MT8735',
  gpu: 'Mali-T720MP2',
  externalMemory: 'microSD  up to 128 GB (dedicated slot)',
  internalMemory: ['16 GB', '32 GB'],
  ram: '2 GB RAM',
  primaryCamera: ['13 MP', 'autofocus'],
  secondaryCmera: ['2 MP', '720p'],
  speaker: 'Yes',
  audioJack: 'Yes',
  wlan: ['Wi-Fi 802.11 a/b/g/n', 'Wi-Fi Direct', 'hotspot'],
  bluetooth: ['4.0', 'A2DP'],
  gps: 'Yes with A-GPS GLONASS',
  nfc: '',
  radio: 'FM radio',
  usb: 'microUSB 2.0',
  sensors: ['Accelerometer', 'proximity'],
  battery: 'Non-removable Li-Ion 3400 mAh battery (12.92 Wh)',
  colors: ['Black'],
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
        name: '16 GB',
      },
      {
        code: 2001,
        name: '32 GB',
      },
    ],
  },
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Container = ({ title, heading, column, children }) => {
  return (
    <FlexItem>
      <FlexItem box as={heading} justifySelf="flex-start">
        {capitalize(title)}
      </FlexItem>
      <FlexBox as="ul" padding="0" alignItems="flex-start" {...{ column }}>
        {children}
      </FlexBox>
    </FlexItem>
  );
};

const ProductPage = () => {
  return (
    <FlexBox
      gap="100px"
      justifyContent="center"
      alignContent="center"
      pt="48px"
    >
      <FlexItem>
        <img src={FAKE_PRODUCT_DETAIL.imgUrl} alt="" />
      </FlexItem>
      <FlexItem box column>
        <Container
          title={`${FAKE_PRODUCT_DETAIL.brand.toUpperCase()} · ${
            FAKE_PRODUCT_DETAIL.model
          }`}
          heading="h2"
        >
          <FlexItem as="h4">Price:</FlexItem>
          <FlexItem as="h3">&nbsp;{FAKE_PRODUCT_DETAIL.price}&nbsp;€</FlexItem>
        </Container>
        <Container title="description" heading="h4" column>
          <ProductDescription
            productDetails={FAKE_PRODUCT_DETAIL}
            {...{ capitalize }}
          />
        </Container>
        <Container title="actions" heading="h4" column>
          <ProductActions
            productDetails={FAKE_PRODUCT_DETAIL}
            {...{ capitalize }}
          />
        </Container>
      </FlexItem>
    </FlexBox>
  );
};

export default ProductPage;

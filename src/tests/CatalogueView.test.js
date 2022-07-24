import React from 'react';
import { render, screen } from '@testing-library/react';
import waitForExpect from 'wait-for-expect';
import mockApi from './mocks/mockApi';
import CatalogueView from '../views/CatalogueView';

beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation(mockApi);
});

afterEach(() => {
  jest.restoreAllMocks();
});

const mockProductCard = jest.fn();
jest.mock(
  '../components/ProductCard',
  () =>
    function (props) {
      mockProductCard(props);
      return <mock-productCard />;
    },
);

test('when catalogue is render, there are 12 ProductCard rendered', async () => {
  render(
    <CatalogueView
      term=""
      setTerm={() => undefined}
      setIsLoading={() => undefined}
      setCurrentPage={() => undefined}
      setMobileSpecifications={() => undefined}
    />,
  );

  await waitForExpect(() => {
    expect(mockProductCard).toHaveBeenCalledTimes(12);
  });
});

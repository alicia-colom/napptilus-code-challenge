import { render, screen } from '@testing-library/react';
import mockFetch from './mocks/mockFetch';
import CatalogueView from '../views/CatalogueView';

beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders list of products', () => {
  render(<CatalogueView 
    term={}
  setTerm={}
  setIsLoading={}
  setCurrentPage={}
  setMobileSpecifications={}
  />);
  const element = screen.getByText(/phonestore/i);
  expect(element).toBeInTheDocument();
});

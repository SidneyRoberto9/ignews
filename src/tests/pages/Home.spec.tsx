import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { mocked } from 'ts-jest/utils';

import Home, { getStaticProps } from '../../pages';
import { stripe } from '../../services/stripe';

jest.mock('next-auth/react');
jest.mock('next/router');
jest.mock('../../services/stripe');

const useSessionMocked = mocked(useSession);

describe('Home Page component', () => {
  it('renders correctly', () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated',
    });

    render(
      <Home
        product={{
          priceId: 'fake-price-id',
          amount: 'R$10,00',
        }}
      />,
    );

    expect(screen.getByText(/R\$10,00/i)).toBeInTheDocument();
  });

  it('loads initial data', async () => {
    const stripeMocked = mocked(stripe.prices.retrieve);

    stripeMocked.mockResolvedValueOnce({
      id: 'fake-price-id',
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: 'fake-price-id',
            amount: '$10.00',
          },
        },
      }),
    );
  });
});

import { fireEvent, render, screen } from '@testing-library/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { mocked } from 'ts-jest/utils';

import { SubscribeButton } from '.';

jest.mock('next-auth/react');
jest.mock('next/router');

const useSessionMocked = mocked(useSession);
const useRouterMocked = mocked(useRouter);

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated',
    });

    render(<SubscribeButton />);

    expect(screen.getByText('Subscribe Now')).toBeInTheDocument();
  });

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn);

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: 'unauthenticated',
    });

    render(<SubscribeButton />);

    fireEvent.click(screen.getByText('Subscribe Now'));

    expect(signInMocked).toHaveBeenCalled();
  });

  it('redirects to posts when user already has a subscription', () => {
    const pushMocked = jest.fn();

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { name: 'John Doe', email: 'john.doe@example.com' },
        activeSubscription: 'fake-active-subscription',
        expires: 'fake-expires',
      },
      status: 'authenticated',
    });

    useRouterMocked.mockReturnValueOnce({
      push: pushMocked,
    } as any);

    render(<SubscribeButton />);

    fireEvent.click(screen.getByText('Subscribe Now'));

    expect(pushMocked).toHaveBeenCalledWith('/posts');
  });
});

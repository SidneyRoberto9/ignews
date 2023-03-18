import { render, screen } from '@testing-library/react';
import { getSession } from 'next-auth/react';
import { mocked } from 'ts-jest/utils';

import Post, { getServerSideProps } from '../../pages/posts/[slug]';
import { createClient } from '../../services/prismic';

const post = {
  slug: 'my-new-post',
  title: 'My new post',
  content: '<p>Post excerpt</p>',
  updatedAt: '10 de Abril',
};

jest.mock('../../services/prismic');
jest.mock('next-auth/react');

describe('Post Page component', () => {
  it('renders correctly', () => {
    render(<Post post={post} />);

    expect(screen.getByText('My new post')).toBeInTheDocument();
    expect(screen.getByText('Post excerpt')).toBeInTheDocument();
  });

  it('redirect user if no subscription is found', async () => {
    const getSessionMocked = mocked(getSession);

    getSessionMocked.mockResolvedValueOnce(null);

    const response = await getServerSideProps({
      params: { slug: 'my-new-post' },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          permanent: false,
        }),
      }),
    );
  });

  it('loads initial data', async () => {
    const getSessionMocked = mocked(getSession);
    const createClientMocked = mocked(createClient);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: 'fake-active-subscription',
    } as any);
    createClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{ type: 'heading', text: 'My new post' }],
          content: [{ type: 'paragraph', text: 'Post excerpt' }],
        },
        last_publication_date: '04-01-2021',
      }),
    } as any);

    const response = await getServerSideProps({
      params: { slug: 'my-new-post' },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post excerpt</p>',
            updatedAt: '01 de abril de 2021',
          },
        },
      }),
    );
  });
});

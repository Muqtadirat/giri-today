'use client';

import { store } from '@/redux/store';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import {
  dehydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { config } from 'dotenv';

config({ path: '.env.local' });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: Infinity,
    },
    mutations: {
      retry: 1,
    },
  },
});

const dehydratedState = dehydrate(queryClient);

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
        <ReactQueryDevtools />
      </Provider>
    </QueryClientProvider>
  );
}

export { dehydratedState };

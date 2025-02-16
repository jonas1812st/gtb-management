"use client";

import { PropsWithChildren } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

export default function ReactQueryProvider({ children }: PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

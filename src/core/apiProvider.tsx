import React, { useEffect } from "react";
import {
  QueryClient,
  QueryCache,
  QueryClientProvider,
  onlineManager,
} from "@tanstack/react-query";
import NetInfo from "@react-native-community/netinfo";
import { Platform } from "react-native";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnReconnect: true,
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      throwOnError: true,
    },
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      // Handle errors centrally
      console.error("Query Error:", error, "Query:", query);
    },
  }),
});

export const clearQueryCache = () => {
  queryClient.clear();
};

export function APIProvider({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const isOnline =
        Platform.OS === "android"
          ? state.isInternetReachable
          : state.isConnected;
      onlineManager.setOnline(isOnline);

      if (isOnline) {
        queryClient.invalidateQueries();
        queryClient.resumePausedMutations();
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

import {
  useMutation as useReactMutationQuery,
  useQuery as useReactFetchQuery,
} from "@tanstack/react-query";
import {
  ReactQueryGetConfig,
  ReactQueryMutationConfig,
  ReactQueryConfig,
} from "../types/reactQueryConfig";
import { ApiClient, ApiGuestClient } from "./apiClient";

interface IUseAPI extends ReactQueryConfig {
  requestBody?: unknown;
  queryParams?: object;
}

const triggerAPI = async <T>(config: IUseAPI): Promise<T> => {
  const {
    url,
    method,
    isMockEnabled,
    mockResponse,
    mockLoading,
    mockError,
    useApiGuestClient,
    queryParams,
    customHeaders,
    requestBody,
  } = config;

  // ApiGuestClient can be used for API that dont need auth
  const axiosClient = useApiGuestClient ? ApiGuestClient : ApiClient;

  if (isMockEnabled) {
    // Simulate loading for mock data
    if (mockLoading) {
      return new Promise<T>((resolve) => {
        setTimeout(() => resolve(mockResponse as T), 5000);
      });
    }

    // Simulate error for mock data
    if (mockError) {
      return Promise.reject(new Error("Mock error occurred"));
    }

    // Return a promise that resolves with mock data immediately
    return Promise.resolve<T>(mockResponse as T);
  }
  // Return the actual query function using axios
  const res = await axiosClient.request({
    method,
    url,
    params: queryParams,
    headers: { ...customHeaders },
    data: requestBody,
  });
  return res.data;
};

const useAPI = <T>(
  config: ReactQueryGetConfig<T> | ReactQueryMutationConfig<T>
) => {
  if ("queryKey" in config) {
    const requestFn = () => triggerAPI<T>(config);
    return useReactFetchQuery({ ...config, queryFn: requestFn });
  }
  const mutationFn = (requestData: object) =>
    triggerAPI<T>({ ...config, requestBody: requestData });
  return useReactMutationQuery({ ...config, mutationFn });
};

export { useAPI, triggerAPI };

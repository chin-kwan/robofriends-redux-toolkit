import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const robotsApi = createApi({
  reducerPath: "robotsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getRobots: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useGetRobotsQuery } = robotsApi;

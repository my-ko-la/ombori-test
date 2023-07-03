import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

import { UsersAPI } from "../constants/api.constants";
import fetchUsers from "../functions/fetchUsers";
import { User } from "../types/user";
import { UserComponent } from "./User";
import LazyLoadComponent from "./utility/LazyLoadComponent";

const UsersProvider: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: [UsersAPI.QUERY_KEY],
    queryFn: async ({ pageParam = UsersAPI.START_PAGE }) =>
      fetchUsers(UsersAPI.URL, pageParam as number),
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });

  return (
    <div className='flex flex-col items-center justify-center'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='flex flex-col items-center md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 md:justify-items-center py-4 px-24 gap-8 md:gap-x-20 lg:gap-x-24 lg:min-w-full md:gap-y-8 w-full xl:grid-cols-4'>
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.data.map((user: User) => (
                <LazyLoadComponent
                  key={user.id}
                  fetchNextPage={fetchNextPage}
                  hasNextPage={hasNextPage}
                >
                  <UserComponent {...user} />
                </LazyLoadComponent>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default UsersProvider;

import autoAnimate from "@formkit/auto-animate";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";

import { UsersAPI } from "../../constants/api.constants";
import fetchUsers from "../../functions/async/fetchUsers";
import GreenPulsatingLoader from "../../misc/GreenPulsatingLoader";
import { User } from "../../types/user";
import { UserComponent } from "../users/User";
import LazyLoadComponent from "../utility/LazyLoadComponent";

const UsersProvider: React.FC = () => {
  const [isLoadingOnTimer, setIsLoadingOnTimer] = React.useState(true);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [UsersAPI.QUERY_KEY],
    queryFn: async ({ pageParam = UsersAPI.START_PAGE }) =>
      fetchUsers(UsersAPI.URL, pageParam as number),
    getNextPageParam: (lastPage) => {
      if (lastPage.page === lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
  });

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoadingOnTimer(false);
    }, 3000);
    containerRef.current && autoAnimate(containerRef.current);
    return () => clearTimeout(loaderTimer);
  }, [containerRef]);

  console.log(data);

  return (
    <div
      ref={containerRef}
      className='flex flex-col items-center justify-center'
    >
      {isLoadingOnTimer ? (
        <GreenPulsatingLoader />
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
      {!isLoadingOnTimer && !hasNextPage && (
        <p className='text-lg text-slate-400 font-extralight py-10'>
          ...no more users to load
        </p>
      )}
    </div>
  );
};

export default UsersProvider;
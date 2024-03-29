import autoAnimate from "@formkit/auto-animate";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";

import { UsersAPI } from "../../constants/api.constants";
import fetchUsers from "../../functions/async/fetchUsers";
import GreenPulsatingLoader from "../../misc/GreenPulsatingLoader";
import { User } from "../../types/user";
import LazyLoadComponent from "../utility/LazyLoadComponent";
import { UserComponent } from "./User";

const UsersProvider: React.FC = () => {
  const [isLoadingOnTimer, setIsLoadingOnTimer] = React.useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [UsersAPI.QUERY_KEY],
    queryFn: async ({ pageParam = UsersAPI.START_PAGE }) =>
      fetchUsers(UsersAPI.URL, pageParam as number),
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) return undefined;
      return lastPage.page + 1;
    },
  });

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoadingOnTimer(false);
    }, 3000);
    return () => clearTimeout(loaderTimer);
  }, []);

  useEffect(() => {
    containerRef.current &&
      autoAnimate(containerRef.current, {
        easing: "ease-in-out",
        duration: 300,
      });
  }, [containerRef]);

  const isLastElement = !isLoadingOnTimer && !hasNextPage;

  return (
    <div className='flex flex-col justify-between mt-8 h-full'>
      <div ref={containerRef} className='flex flex-col items-center pt-6'>
        {isLoadingOnTimer ? (
          <GreenPulsatingLoader />
        ) : (
          <div
            className='flex flex-col 
              items-center w-full py-4 px-24 gap-8
              md:grid md:grid-flow-row md:grid-cols-2 md:justify-items-center md:gap-x-28 md:gap-y-8
              lg:grid-cols-3 lg:gap-x-32 lg:min-w-full
              xl:gap-x-48 xl:grid-cols-4'
          >
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.data.map((user: User, userIndex: number) => (
                  <LazyLoadComponent
                    key={user.id}
                    fetchNextPage={fetchNextPage}
                    hasNextPage={
                      hasNextPage && userIndex === page.data.length - 1
                    }
                  >
                    <UserComponent {...user} />
                  </LazyLoadComponent>
                ))}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
      {isLastElement && (
        <p className='text-lg text-slate-400 animate-fade font-extralight py-5 text-center'>
          ...you've reached the end of the list
        </p>
      )}
    </div>
  );
};

export default UsersProvider;

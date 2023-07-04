import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { User, UserAPIFetchResult } from "../../types/user";

interface LazyLoadComponentProps {
  children: React.ReactNode;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<UserAPIFetchResult<User[]>, unknown>
  >;
  hasNextPage?: boolean;
}

const LazyLoadComponent: React.FC<LazyLoadComponentProps> = ({
  children,
  hasNextPage,
  fetchNextPage,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      void fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return <div ref={ref}>{children}</div>;
};

export default LazyLoadComponent;

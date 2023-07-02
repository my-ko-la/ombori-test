import autoAnimate from "@formkit/auto-animate";
import React, { useEffect } from "react";

import { mockUserData } from "../mocks/userData";
import { User } from "../types/user";
import { UserComponent } from "./User";

const UsersProvider: React.FC = () => {
  const usersParent = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    usersParent.current && autoAnimate(usersParent.current);
  }, [usersParent]);

  return (
    <>
      <hr />
      <ul
        ref={usersParent}
        className='flex flex-col items-center md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 md:justify-items-center py-4 px-24 gap-4 md:gap-x-16 md:gap-y-8 w-full xl:grid-cols-4'
      >
        {mockUserData.map((user: User) => (
          <UserComponent key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
};

export default UsersProvider;

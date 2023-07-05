import React from "react";

import { User } from "../../types/user";

export const UserComponent: React.FC<User> = ({
  avatar,
  email,
  first_name,
  last_name,
  id,
}) => {
  return (
    <div
      key={id}
      className='flex flex-row bg-slate-200 shadow-lg items-center px-4 w-72 h-24 rounded-lg
      sm:w-96 sm:h-32 gap-x-3 sm:gap-x-6
      md:gap-x-2 md:w-80 md:h-28'
    >
      <img
        alt="User's avatar"
        src={avatar}
        className='sm:w-20 sm:h-20 w-14 h-14 rounded-full shadow-md'
      />
      <div className='flex font-mono flex-col items-center justify-between p-2'>
        <p className='font-semibold text-sm sm:text-md'>
          {first_name} {last_name}
        </p>
        <p className='text-xs italic sm:text-sm'>{email}</p>
      </div>
    </div>
  );
};

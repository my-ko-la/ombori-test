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
      className='flex flex-row bg-slate-200 shadow-lg items-center px-4 md:w-80 md:h-28 w-96 h-32 gap-x-6 md:gap-x-2 rounded-lg'
    >
      <img
        loading='lazy'
        alt="User's avatar"
        src={avatar}
        className='w-20 h-20 rounded-full shadow-md'
      />
      <div className='flex font-mono flex-col items-center justify-between p-2'>
        <p className='font-semibold text-md'>
          {first_name} {last_name}
        </p>
        <p className='text-sm italic'>{email}</p>
      </div>
    </div>
  );
};

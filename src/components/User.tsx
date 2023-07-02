import React from "react";

import { User } from "../types/user";

export const UserComponent: React.FC<User> = ({
  avatar,
  email,
  first_name,
  last_name,
  id,
}) => {
  const [isShown, setIsShown] = React.useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <li
        key={id}
        className='flex flex-row bg-slate-200 shadow-lg items-center px-4 w-72 h-20 gap-8 rounded-lg'
        onClick={handleClick}
      >
        <img src={avatar} className='w-14 h-14 rounded-full shadow-md' />
        <div className='flex font-mono flex-col items-center justify-between p-6'>
          <p className='font-semibold'>
            {first_name} {last_name}
          </p>
          <p hidden={!isShown} className='italic'>
            {email}
          </p>
        </div>
      </li>
    </>
  );
};

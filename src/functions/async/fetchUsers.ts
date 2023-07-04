import { User, UserAPIFetchResult } from "../../types/user";

const fetchUsers = async (url: string, page: number) => {
  try {
    const data: UserAPIFetchResult<User[]> = await fetch(
      `${url}?page=${page}&per_page=4`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data: UserAPIFetchResult<User[]>) => data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchUsers;

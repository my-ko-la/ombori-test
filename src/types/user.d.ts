export type User = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

export interface UserAPIFetchResult<T> {
  data: T;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

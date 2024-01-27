import { User } from '../models/User';

export interface UserState {
  users: User[];
  selectedUserId: string | null;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  searchkey: string;
}

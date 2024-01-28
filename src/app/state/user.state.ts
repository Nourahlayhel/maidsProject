import { User } from '../models/User';

export interface UserState {
  users: User[];
  selectedUser: User | null;
  currentPage: number;
  totalPages: number;
  loading: boolean;
}

import { User } from '../../models/User'

export interface IAuthContext {
  currentUser: User | null;
}

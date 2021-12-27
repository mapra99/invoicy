import { Location } from './Location'
export interface User {
  id?: string;
  name?: string;
  email?: string;
  locations?: Location[];
  createdAt?: Date;
  updatedAt?: Date;
}

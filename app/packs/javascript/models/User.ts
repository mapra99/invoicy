import { Location } from './Location'
export interface User {
  id?: string;
  name?: string;
  email?: string;
  locations?: Location[];
  location?: Location;
  createdAt?: Date;
  updatedAt?: Date;
}

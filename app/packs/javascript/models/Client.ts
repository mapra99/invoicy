import { Location } from './Location';

export interface Client {
  id?: string;
  name?: string;
  location?: Location;
  email?: string;
}

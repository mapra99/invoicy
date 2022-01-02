import { Location } from '../../models/Location';

export interface LocationDetailsProps {
  location: Location,
  align?: 'start' | 'center' | 'end'
}

export interface LocationDetailsWrapperProps {
  align?: 'start' | 'center' | 'end'
}

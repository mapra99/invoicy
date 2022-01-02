import React from 'react';
import { LocationDetailsProps } from './types';
import { Text } from '../Text';
import { LocationDetailsWrapper } from './LocationDetails.styled'

export const LocationDetails = ({ location, align }: LocationDetailsProps) => {
  const {
    streetAddress, city, postcode, country,
  } = location;

  return (
    <LocationDetailsWrapper align={align} >
      <Text color="tertiary" type="body2">
        { streetAddress }
      </Text>
      <Text color="tertiary" type="body2">
        { city }
      </Text>
      <Text color="tertiary" type="body2">
        { postcode }
      </Text>
      <Text color="tertiary" type="body2">
        { country }
      </Text>
    </LocationDetailsWrapper>
  );
};

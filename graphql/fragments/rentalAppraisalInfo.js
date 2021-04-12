import gql from 'graphql-tag';
import { PublicUserInfoFragment } from './publicUserInfo';

const RentalAppraisalInfoFragment = gql`
  fragment rentalAppraisalInfo on RentalAppraisal {
    id
    createdAt
    requestedBy {
      ...publicUserInfo
    }
    appraisedBy {
      ...publicUserInfo
    }
    placeId
    location
    locationLat
    locationLng
    administrative_area_level_1
    country
    locality
    postal_code
    route
    street_number
    rooms
    bathrooms
    heatSources
    rent
    rentValueAccepted
    acceptTerms
    property {
      id
      location
    }
    appraised
    hasBeenUsed
  }
  ${PublicUserInfoFragment}
`;

export { RentalAppraisalInfoFragment };

export default RentalAppraisalInfoFragment;

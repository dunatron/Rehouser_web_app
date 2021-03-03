import gql from 'graphql-tag';

const CLOUDINARY_ACCESS_QUERY = gql`
  query CLOUDINARY_ACCESS_QUERY {
    cloudinaryAccess {
      cloud_name
      api_key
      username
      timestamp
      signature
    }
  }
`;
export { CLOUDINARY_ACCESS_QUERY };

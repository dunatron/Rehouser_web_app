import gql from 'graphql-tag';

const MAKE_CLOUDINARY_ACCESS_QUERY = gql`
  query MAKE_CLOUDINARY_ACCESS_QUERY {
    makeCoudinaryAccess {
      cloud_name
      api_key
      username
      timestamp
      signature
    }
  }
`;
export { MAKE_CLOUDINARY_ACCESS_QUERY };

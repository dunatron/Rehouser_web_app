import gql from 'graphql-tag';

const GET_SAVED_FORM_QUERY = gql`
  query GET_SAVED_FORM_QUERY($where: SavedFormWhereUniqueInput!) {
    getSavedForm(where: $where) {
      id
      json
      path
      identifier
      user {
        id
        firstName
      }
    }
  }
`;

export { GET_SAVED_FORM_QUERY };

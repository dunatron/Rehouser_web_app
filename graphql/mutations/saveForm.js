import gql from 'graphql-tag';

const SAVE_FORM_MUTATION = gql`
  mutation SAVE_FORM_MUTATION($data: SavedFormCreateInput!) {
    saveForm(data: $data) {
      id
      identifier
    }
  }
`;

export { SAVE_FORM_MUTATION };

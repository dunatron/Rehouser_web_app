import gql from 'graphql-tag';

const FILES_COUNT_QUERY = gql`
  query FILES_COUNT_QUERY(
    $where: FileWhereInput
    $orderBy: FileOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    filesConnection(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      aggregate {
        count
      }
    }
  }
`;
export { FILES_COUNT_QUERY };
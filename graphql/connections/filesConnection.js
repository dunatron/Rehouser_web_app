import gql from 'graphql-tag';
import { FileInfoFragment } from '../fragments/fileInfo';

const FILES_CONNECTION_QUERY = gql`
  query FILES_CONNECTION_QUERY(
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
      pageInfo {
        hasNextPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        cursor
        node {
          ...fileInfo
        }
      }
    }
  }
  ${FileInfoFragment}
`;
export { FILES_CONNECTION_QUERY };

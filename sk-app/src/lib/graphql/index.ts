import { GraphQLClient } from 'graphql-request';

const endpoint =  'http://localhost:3010/graphql';

const gqlClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: 'Basic YWRtaW46YWRtaW4=',
  },
})

export default gqlClient;
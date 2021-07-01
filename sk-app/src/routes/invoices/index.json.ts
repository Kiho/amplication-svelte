import gqlClient from '$lib/graphql';
import { GET_INVOICES } from '$lib/queries/invoices';

export const get = async ({ query, locals }) => {
  const skip = query.get('page')! * 10
  const variables = { where: {}, take: 10, skip, orderBy: { id: 'Asc' }};    
  const { items: invoices } = await gqlClient.request(GET_INVOICES, variables);
  return {
    body: {
      invoices
    },
  }
};
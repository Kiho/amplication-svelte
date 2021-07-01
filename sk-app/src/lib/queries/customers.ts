import { gql } from 'graphql-request';

export const GET_CUSTOMER = gql`
  query customer($customerId: ID!) {
    customer(id: $customerId) {
      id
      customerName
      email
      phone
    }
  }
`;

export const GET_CUSTOMERS = gql`
  query {
    customers {
      id
      customerName
      email
      phone
    }
  }
`;

export const CREATE_CUSTOMER = gql`
  mutation createCustomer($customerName: String!) {
    createCustomer(customerName: $customerName) {
      id
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation updateCustomer($customerId: ID!, $customerName: String) {
    updateCustomer(id: $customerId, name: $customerName) {
      id
    }
  }
`;

export const DELETE_CUSTOMER = gql`
  mutation deleteCustomer($customerId: ID!) {
    deleteCustomer(id: $customerId)
  }
`;
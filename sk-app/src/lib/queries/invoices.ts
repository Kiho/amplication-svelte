import { gql } from 'graphql-request';

export const GET_INVOICE = gql`
  query invoice($invoiceId: ID!) {
    invoice(id: $invoiceId) {
      id
      invoiceNo
      invoiceDate
      totalAmount
      invoiceDetails {
        description
        roomNo
        amount
        address {
          address_1
          address_2
          city
          state
          zip
        }
      }
    }
  }
`;

export const GET_INVOICES = gql`
  query invoices ($where: InvoiceWhereInput, $orderBy: InvoiceOrderByInput, $skip: Float, $take: Float) {
    items: invoices(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {
      id
      invoiceNo
      invoiceDate
      totalAmount  
      customer {
        id
        customerName
      }    
      invoiceDetails {
        description
        roomNo
        amount        
        address {
          address_1
          address_2
          city
          state
          zip
        }
      }
    }
    total: _invoicesMeta(where: $where, orderBy: $orderBy, skip: $skip, take: $take) {    
      count    
      __typename  
    }
  }
`;

export const CREATE_INVOICE = gql`
  mutation createInvoice($invoiceNo: String!) {
    createInvoice(invoiceNo: $invoiceNo) {
      id
    }
  }
`;

export const UPDATE_INVOICE = gql`
  mutation updateInvoice($invoiceId: ID!, $invoiceNo: String) {
    updateInvoice(id: $invoiceId, invoiceNo: $invoiceNo) {
      id
    }
  }
`;

export const DELETE_INVOICE = gql`
  mutation deleteInvoice($invoiceId: ID!) {
    deleteInvoice(id: $invoiceId)
  }
`;
<script context="module">
  import gqlClient from '$lib/graphql';
  import { GET_CUSTOMERS } from '$lib/queries/customers';

  export async function load() {    
    const { customers } = await gqlClient.request(GET_CUSTOMERS);

    return {
      props: {
        customers
      },
    }
  }
</script>

<script type="ts">
  import {
      DataTable,
      Toolbar,
      ToolbarContent,
      ToolbarSearch,
      ToolbarMenu,
      ToolbarMenuItem,
      Button,
  } from "carbon-components-svelte";

  let headers = [{ key: 'customerName', value: 'Name' }, { key: 'email', value: 'Email' }, { key: 'phone', value: 'Phone' }];

  export let customers = [];
</script>

<DataTable
  title="Customers"
  description="Your organization's active customers."
  {headers}
  rows={customers}
>
  <Toolbar>
    <ToolbarContent>
      <ToolbarSearch />
      <ToolbarMenu>
        <ToolbarMenuItem primaryFocus>Restart all</ToolbarMenuItem>
        <ToolbarMenuItem href="https://cloud.ibm.com/docs/loadbalancer-service">
          API documentation
        </ToolbarMenuItem>
        <ToolbarMenuItem danger>Stop all</ToolbarMenuItem>
      </ToolbarMenu>
      <Button>Create Customer</Button>
    </ToolbarContent>
  </Toolbar>
</DataTable>
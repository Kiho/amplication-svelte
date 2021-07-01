<script context="module" lang="ts">
	// import Images from '$lib/Invoice/Images.svelte'
	import InfiniteLoading from 'svelte-infinite-loading'
	import Detail from '$lib/Invoice/Detail.svelte'
	// import { createDefaultInvoice } from '$lib/util'
	import type { InfiniteEvent } from 'svelte-infinite-loading'
	// import type { Invoice } from '@prisma/client'
	import type { Load } from '@sveltejs/kit'
	import {
		Grid,
		Button,
		Column,
		DataTable,
		Form,
		FormGroup,
		Modal,
		NumberInput,
		Row,
		TextArea,
		TextInput,
		Tile,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		DataTableSkeleton
	} from 'carbon-components-svelte'
	import { Add16 } from 'carbon-icons-svelte';
	import { Robot } from 'carbon-pictograms-svelte';

	// export const load: Load = async ({ fetch }) => {
	// 	const res = await fetch(`./invoices.json`)

	// 	if (res.ok) {
	// 		return { props: { invoices: await res.json() } }
	// 	}

	// 	return {
	// 		status: res.status,
	// 		error: new Error(`Could not fetch invoices ${res.body}`)
	// 	}
	// }
  import gqlClient from '$lib/graphql';
  import { GET_INVOICES } from '$lib/queries/invoices';

  export async function load() {
		const variables = { where: {}, take: 10, skip: 0, orderBy: { id: 'Asc' }};    
    const { items: invoices } = await gqlClient.request(GET_INVOICES, variables);

    return {
      props: {
        invoices
      },
    }
  }	
</script>

<script lang="ts">
  import type { DataTableValue } from 'carbon-components-svelte/types/DataTable/DataTable';
	export let invoices; //: Invoice[]

	let page = 1

	let createInvoice = false
	const sorting = {
		"ascending": "Asc",
		"descending": "Desc",
	};
	const serverSort = (a: DataTableValue, b: DataTableValue) => 0;

	const _priceFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
	const formatCurrency = (price: number) => _priceFormatter.format(price)

	const headers = [
		{ key: 'invoiceNo', value: 'Invoice#', sort: false as const },
		{ key: 'address', value: 'Address', sort: serverSort },
		{ key: 'discount', value: 'Discount', sort: serverSort, display: (x: number) => formatCurrency(x) },
		{ key: 'totalAmount', value: 'Amount', sort: serverSort, display: (x: number) => formatCurrency(x) },
		{ key: 'customerName', value: 'Customer', sort: serverSort }
	]

	function getAddress(invoice) {
		const a = invoice.invoiceDetails[0]?.address;
		const address = a ?  `${a.address_1}, ${a.city}, ${a.state} ${a.zip}` : '';
		return address;
	}

	$: rows = invoices.map((each) => ({
		...each,
		id: each.invoiceNo,
		address: getAddress(each),
		customerName: each.customer.customerName
	}))

	const newInvoice = { invoiceDetails: [], customer: {} }

	const deleteDetail = (i: number) =>
		(newInvoice.invoiceDetails = [...newInvoice.invoiceDetails.slice(0, i), ...newInvoice.invoiceDetails.slice(i + 1)])

	function loadMore({ detail: { loaded, complete } }: InfiniteEvent) {
		fetch(`./invoices.json?page=${page}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.length) {
					setTimeout(() => {
						page++
						invoices = [...invoices, ...data]
						loaded()
					}, 5000)
				} else {
					complete()
				}
			})
	}

	const handleHeaderClick = ({ detail }) => {
			const sorted = { field: detail.header.key, order: sorting[detail.sortDirection] };
			console.log('sorted', sorted);
	}
</script>

<Modal
	bind:open={createInvoice}
	hasForm
	modalHeading="Create Invoice"
	primaryButtonText="Create"
	secondaryButtonText="Cancel"
	on:click:button--secondary={() => (createInvoice = false)}
	on:open
	on:close
	on:submit
>
	<Form on:submit>
		<FormGroup>
			<TextInput labelText="Customer Name" placeholder="Search" />
		</FormGroup>
		<!-- <FormGroup legendText="Images">
			<Images />
		</FormGroup> -->
		<FormGroup>
			<Row>
				<Column sm={4} md={4} lg={6}>
					<TextInput labelText="Street Address" placeholder="123 Main Street" />
				</Column>
				<Column sm={4} md={4} lg={4}>
					<TextInput labelText="City" placeholder="New York" />
				</Column>
				<Column sm={4} md={4} lg={3}>
					<TextInput labelText="State" placeholder="NY" />
				</Column>
				<Column sm={4} md={4} lg={3}>
					<TextInput labelText="Zip Code" placeholder="000000" />
				</Column>
			</Row>
		</FormGroup>
		<FormGroup>
			<TextArea
				labelText="Description"
				placeholder="A brief description of the listed property..."
			/>
		</FormGroup>
		<FormGroup legendText="Line Items">
			<Grid noGutter fullWidth>
				<Row>
					<!-- <Column sm={4} md={5} lg={5} style="padding-right: 5px">
						<NumberInput label="Bedrooms" min={0} />
					</Column>
					<Column sm={4} md={3} lg={5} style="padding-right: 5px">
						<NumberInput label="Bathrooms" step={0.5} min={0} />
					</Column> -->
					<Column sm={4} md={8} lg={{ span: 5, offset: 1 }}>
						<Button
							on:click={() =>
								(newInvoice.invoiceDetails = [...newInvoice.invoiceDetails, { roomNo: '', description: '' }])}
							icon={Add16}
							size="field"
							style="max-width: 100%; width: 100%; margin-top: 24px"
							kind="tertiary"
						>
							Add Detail
						</Button>
					</Column>
				</Row>
			</Grid>
			{#each newInvoice.invoiceDetails as item, i (i)}
				<Row style="margin-top: 1em">
					<Column>
						<Detail bind:item on:delete={() => deleteDetail(i)} />
					</Column>
				</Row>
			{:else}
				<Row>
					<Column>
						<Tile
							style="text-align: center; margin-top: 1em; border: 1px solid var(--cds-ui-05,#161616);"
						>
							<Robot height="96" width="96" />
							<p>There are no line items. Add one with the button above.</p>
						</Tile>
					</Column>
				</Row>
			{/each}
		</FormGroup>
	</Form>
</Modal>

<DataTable sortable {headers} {rows} on:click:header={handleHeaderClick}>
	<Toolbar>
		<ToolbarContent>
			<ToolbarSearch />
			<Button icon={Add16} on:click={() => (createInvoice = true)}>Create Invoice</Button>
		</ToolbarContent>
	</Toolbar>
</DataTable>

<InfiniteLoading on:infinite={loadMore}>
	<table slot="spinner" class="bx--skeleton bx--data-table">
		<tbody>
			<tr>
				<td><span style="width: 100%" /></td>
			</tr>
		</tbody>
	</table>

	<table slot="noMore" class="bx--data-table">
		<tbody>
			<tr>
				<td style="text-align: center"><span style="width: 100%">No More Data</span></td>
			</tr>
		</tbody>
	</table>
</InfiniteLoading>

<style>
	:global(.bx--number__input-wrapper > input) {
		padding-right: 16px !important;
	}
</style>

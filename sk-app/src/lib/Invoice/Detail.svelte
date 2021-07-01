<script lang="ts">
	import { Tile, TextInput, TextArea, Row, Button, Column, Tooltip } from 'carbon-components-svelte'
	import { Edit16, CheckmarkFilled16, TrashCan16 } from 'carbon-icons-svelte'
	import { onMount, createEventDispatcher } from 'svelte'

	import type { InvoiceDetail } from '../types/InvoiceDetail';

	export let item: Pick<InvoiceDetail, 'roomNo' | 'description'>

	const dispatch = createEventDispatcher()
	let editing = false

	onMount(() => {
		editing = !item.roomNo && !item.description
		console.log('item', item);
	})
</script>

<Tile style="border: 1px solid var(--cds-ui-05,#161616);">
	<Row class="mb3">
		<Column sm={{ span: 1, offset: 3 }} class="center">
			<Button
				kind="ghost"
				size="small"
				disabled={!item.roomNo && !item.description}
				tooltipPosition="left"
				icon={editing ? CheckmarkFilled16 : Edit16}
				iconDescription={editing ? 'Stop Editing Line Item' : 'Edit Line Item'}
				on:click={() => (editing = !editing)}
			/>
			<Button
				kind="danger"
				size="small"
				tooltipPosition="left"
				icon={TrashCan16}
				iconDescription="Delete Line Item"
				on:click={() => dispatch('delete')}
			/>
		</Column>
	</Row>
	{#if editing}
		<TextInput
			bind:value={item.roomNo}
			light
			size="sm"
			labelText="Room Number"
			placeholder="Room Number"
			style="margin-bottom: 1em"
		/>
		<TextArea
			bind:value={item.description}
			light
			labelText="Work Description"
			placeholder="A brief work description of the particular room."
		/>
	{:else}
		<p>
			<strong>{item.roomNo}</strong>
		</p>
		<p>{item.description}</p>
	{/if}
</Tile>

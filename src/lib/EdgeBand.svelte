<script>
	import Children from '$lib/Children.svelte';
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};
</script>

<div class="edge-band">
	<p on:click={toggle}>
		<span class="type">{node['Item Type']}</span>
		{node['Item Code']}_{node['Color Code']}_{node['Width']}X{node['Thickness']}_MM
		<span class="cnt">{node['Quantity']} {node['Units']}</span>
	</p>
	{#if node.expanded}
		<Children {node} />
	{/if}
</div>

<style>
	.edge-band {
		margin: 8px 0;
	}

	.type {
		position: absolute;
		font-size: 12px;
		top: 8px;
		left: 16px;
		color: rgba(160, 0, 160, 0.45);
	}

	p {
		position: relative;
		display: flex;
		padding: 24px 16px 16px 16px;
		color: rgb(160, 80, 160);
		background-color: rgba(160, 80, 160, 0.15);
		border: 1px solid rgb(160, 80, 160);
		border-radius: 4px;
		cursor: pointer;
	}

	p:hover {
		background-color: rgba(160, 80, 160, 0.25);
	}

	.cnt {
		margin-left: auto;
		padding-left: 16px;
		color: inherit;
	}
</style>

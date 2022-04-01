<script>
	import Children from '$lib/Children.svelte';
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};
</script>

<div class="item">
	<p on:click={toggle}>
		{node['Item Code']}
		<span>({node['Item Type']})</span>
		{node['Color Code']}
		{node['Width']}x{node['Length']}x{node['Thickness']}
		<span>{node['CoverSide']}</span>
		{node['Quantity']}
	</p>
	{#if node.expanded}
		<Children {node} />
	{/if}
</div>

<style>
	.item {
		margin: 8px 0;
	}

	p {
		padding: 16px;
		background-color: rgb(255, 255, 255);
		border: 1px dashed rgb(0, 0, 0);
		border-radius: 4px;
		cursor: pointer;
	}

	span {
		color: #aaa;
	}
</style>

<script>
	import Children from '$lib/Children.svelte';
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};
</script>

<div class="order">
	<h3 on:click={toggle}>
		<span class="type">{node['Item Type']}</span>
		{node['Item Code']}
		<!-- <span>({node['Item Type']})</span> -->
	</h3>
	{#if node.expanded}
		<Children {node} />
	{/if}
</div>

<style>
	.order {
		margin: 8px 0;
	}

	.type {
		position: absolute;
		font-size: 12px;
		font-style: italic;
		top: 8px;
		left: 16px;
		color: rgba(128, 0, 0, 0.45);
	}

	h3 {
		position: relative;
		display: flex;
		padding: 24px 16px 16px 16px;
		color: rgb(128, 0, 0);
		background-color: rgba(128, 0, 0, 0.15);
		border: 1px solid rgb(128, 0, 0);
		border-radius: 4px;
		cursor: pointer;
	}

	h3:hover {
		background-color: rgba(128, 0, 0, 0.25);
	}
</style>

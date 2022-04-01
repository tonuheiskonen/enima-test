<script>
	import Children from '$lib/Children.svelte';
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};
</script>

<div class="board">
	<p on:click={toggle}>
		<span class="type">{node['Item Type']}</span>
		{node['Item Code']}_{node['Thickness']}_MM
		<span class="cnt">{node['Quantity']} {node['Units']}</span>
	</p>
	{#if node.expanded}
		<Children {node} />
	{/if}
</div>

<style>
	.board {
		margin: 8px 0;
	}

	.type {
		position: absolute;
		font-size: 12px;
		font-style: italic;
		top: 8px;
		left: 16px;
		color: rgba(160, 80, 0, 0.45);
	}

	p {
		position: relative;
		display: flex;
		padding: 24px 16px 16px 16px;
		color: rgb(160, 80, 0);
		background-color: rgba(160, 80, 0, 0.15);
		border: 1px solid rgb(160, 80, 0);
		border-radius: 4px;
		cursor: pointer;
	}

	p:hover {
		background-color: rgba(160, 80, 0, 0.25);
	}

	.cnt {
		margin-left: auto;
		padding-left: 16px;
		color: inherit;
	}
</style>

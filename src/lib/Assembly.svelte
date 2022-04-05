<script>
	import Children from '$lib/Children.svelte';
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};
</script>

<div class="assembly">
	<p on:click={toggle}>
		<span class="type">{node.type}</span>
		{node.code}
		<span class="cnt">{node.quantity}</span>
	</p>
	{#if node.expanded}
		<Children {node} />
	{/if}
</div>

<style>
	.assembly {
		position: relative;
		margin: 8px 0;
	}

	.assembly::before {
		position: absolute;
		content: '';
		top: 32px;
		left: -24px;
		width: 24px;
		border-top: 1px dashed black;
	}

	.type {
		position: absolute;
		font-size: 12px;
		font-style: italic;
		top: 8px;
		left: 16px;
		color: rgba(0, 0, 128, 0.45);
	}

	p {
		position: relative;
		display: flex;
		padding: 24px 16px 16px 16px;
		color: rgb(0, 0, 128);
		background-color: rgba(0, 0, 128, 0.15);
		border: 1px solid rgb(0, 0, 128);
		border-radius: 4px;
		cursor: pointer;
	}

	p:hover {
		background-color: rgba(0, 0, 128, 0.25);
	}

	.cnt {
		margin-left: auto;
		padding-left: 16px;
		color: inherit;
	}
</style>

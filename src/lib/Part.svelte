<script>
	import Children from '$lib/Children.svelte';
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};
</script>

<div class="part">
	<p on:click={toggle}>
		<span class="type">{node.type}</span>
		{node.code}
		<span class="size">
			{node.length} x {node.width} x {node.thickness}
		</span>
		<span class="cnt">{node.quantity}</span>
	</p>
	{#if node.expanded}
		<Children {node} />
	{/if}
</div>

<style>
	.part {
		position: relative;
		margin: 8px 0;
	}

	.part::before {
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
		color: rgba(0, 128, 0, 0.45);
	}

	p {
		position: relative;
		display: flex;
		padding: 24px 16px 16px 16px;
		color: rgb(0, 128, 0);
		background-color: rgba(0, 128, 0, 0.15);
		border: 1px solid rgb(0, 128, 0);
		border-radius: 4px;
		cursor: pointer;
	}

	p:hover {
		background-color: rgba(0, 128, 0, 0.25);
	}

	.size {
		margin-left: auto;
	}

	.cnt {
		padding-left: 16px;
		color: inherit;
	}
</style>

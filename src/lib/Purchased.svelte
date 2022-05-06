<script>
	import Children from '$lib/Children.svelte';
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};
</script>

<div class="purchased">
	<p on:click={toggle}>
		<span class="type">{node.type}</span>
		{node.code}
		<span class="comments">( {node.comments} )</span>
		<span class="cnt">{node.quantity}</span>
	</p>
	{#if node.expanded}
		<Children {node} />
	{/if}
</div>

<style>
	.purchased {
		position: relative;
		margin: 8px 0;
	}

	.purchased::before {
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
		color: rgba(0, 0, 0, 0.45);
	}

	p {
		position: relative;
		display: flex;
		padding: 24px 16px 16px 16px;
		color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.15);
		border: 1px solid rgb(0, 0, 0);
		border-radius: 4px;
		/* cursor: pointer; */
	}

	p:hover {
		background-color: rgba(0, 0, 0, 0.25);
	}

	.comments {
		padding-left: 16px;
		color: rgba(0, 0, 0, 0.45);
	}

	.cnt {
		margin-left: auto;
		color: inherit;
	}
</style>

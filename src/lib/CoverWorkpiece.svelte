<script>
	/**
	 * Cover Workpiece võib olla:
	 * - Veneer
	 * - Edge Band
	 * - Paint
	 */
	import Children from '$lib/Children.svelte';
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};
</script>

<div class="cover-workpiece">
	<p on:click={toggle}>
		<span class="type">{node['Material Type']} ({node['CoverSide']})</span>
		{#if node['Material Type'] === 'Paint'}
			{node['Color Code']}
		{/if}
		{#if node['Material Type'] === 'Edge Band'}
			{node['Material Code']}_{node['Color Code']}_{node['Thickness']}x{node['Width']}mm
		{/if}
		<span class="cnt">{node['Material Quantity']} {node['Units']}</span>
	</p>
	{#if node.expanded}
		<Children {node} />
	{/if}
</div>

<style>
	.cover-workpiece {
		position: relative;
		margin: 8px 0;
	}

	.cover-workpiece::before {
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
		color: rgba(160, 160, 160, 0.45);
	}

	p {
		position: relative;
		display: flex;
		padding: 24px 16px 16px 16px;
		color: rgb(160, 160, 160);
		background-color: rgba(160, 160, 160, 0.15);
		border: 1px solid rgb(160, 160, 160);
		border-radius: 4px;
		cursor: pointer;
	}

	p:hover {
		background-color: rgba(160, 160, 160, 0.25);
	}

	.cnt {
		margin-left: auto;
		padding-left: 16px;
		color: inherit;
	}
</style>

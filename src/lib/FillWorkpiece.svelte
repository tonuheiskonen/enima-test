<script>
	/**
	 * Fill Workpiece võib olla:
	 * - Solid
	 * - Board
	 * - Laminated Board
	 * - Multilayer Board
	 * - Desktop
	 * - Rod
	 */
	import Children from '$lib/Children.svelte';
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};
</script>

<div class="fill-workpiece">
	<p on:click={toggle}>
		<span class="type">{node['Material Type']}</span>
		{#if node['Material Type'] === 'Board'}
			{node['Material Code']}_{node['Thickness']}mm
		{/if}
		{#if node['Material Type'] === 'Laminated Board'}
			{node['Material Code']}_{node['Color Code']}_{node['Thickness']}mm
		{/if}
		<span class="size">
			{node['Length']} x {node['Width']}
		</span>
		<span class="cnt">{node['Quantity']} {node['Units']}</span>
	</p>
	{#if node.expanded}
		<Children {node} />
	{/if}
</div>

<style>
	.fill-workpiece {
		position: relative;
		margin: 8px 0;
	}

	.fill-workpiece::before {
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

	.size {
		margin-left: auto;
	}

	.cnt {
		padding-left: 16px;
		color: inherit;
	}
</style>

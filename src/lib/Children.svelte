<script>
	import Item from '$lib/Item.svelte';
	import Assembly from '$lib/Assembly.svelte';
	import Part from '$lib/Part.svelte';
	import Purchased from '$lib/Purchased.svelte';
	import FillWorkpiece from '$lib/FillWorkpiece.svelte';
	import CoverWorkpiece from '$lib/CoverWorkpiece.svelte';
	import Board from '$lib/Board.svelte';
	import LaminatedBoard from '$lib/LaminatedBoard.svelte';
	import EdgeBand from '$lib/EdgeBand.svelte';
	import Materials from '$lib/Materials.svelte';

	export let node;

	const components = {
		Assembly: Assembly,
		Part: Part,
		Purchased: Purchased,
		'Composite Workpiece': FillWorkpiece,
		'Fill Workpiece': FillWorkpiece,
		'Cover Workpiece': CoverWorkpiece,
		Board: Board,
		'Laminated Board': LaminatedBoard,
		Paint: Item,
		'Edge Band': EdgeBand,
		_List: Materials
	};

	const children = node.Children.sort((a, b) => {
		if (a.type < b.type) return -1;
		if (a.type > b.type) return +1;
		return 0;
	});
</script>

<div class="children">
	{#each children as child}
		<!-- <svelte:component this={components[child.type]} node={child} /> -->
		<svelte:component this={components[child.type]} node={child} />
	{/each}
</div>

<style>
	.children {
		position: relative;
		margin-left: 8px;
		padding-left: 24px;
		/* border-left: 1px dashed black; */
	}

	.children::before {
		position: absolute;
		content: '';
		border-left: 1px dashed black;
		top: -8px;
		left: 0;
		bottom: 28px;
	}
</style>

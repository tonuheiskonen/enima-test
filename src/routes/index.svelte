<script>
	import Canvas from '$lib/canvas/Canvas.svelte';
	import Rectangle from '$lib/canvas/Rectangle.svelte';
	import Item from '$lib/Item.svelte';
	import { xlink_attr } from 'svelte/internal';

	let canvasVisible = true;

	const data = [
		{ w: 50, h: 75 },
		{ w: 50, h: 225 },
		{ w: 50, h: 400 },
		{ w: 50, h: 275 },
		{ w: 50, h: 100 },
		{ w: 50, h: 100 },
		{ w: 50, h: 75 },
		{ w: 50, h: 225 },
		{ w: 50, h: 400, color: 'rgb(0, 100, 25)' },
		{ w: 50, h: 275 },
		{ w: 50, h: 100 },
		{ w: 50, h: 75 },
		{ w: 50, h: 225 },
		{ w: 50, h: 400 },
		{ w: 50, h: 275 },
		{ w: 50, h: 150 }
	];

	const { x, y, w, h } = data[0];

	function handleClick() {
		canvasVisible = !canvasVisible;
	}
</script>

<h1>Canvas test</h1>

<button on:click={handleClick}>remove canvas</button>
<div class="container">
	{#if canvasVisible}
		<Canvas width={801} height={450}>
			{#each data as item, index}
				<Rectangle x={index * item.w} h={item.h} color={item.color} />
			{/each}
		</Canvas>
	{/if}
</div>

<style>
	.container {
		margin-top: 32px;
		color: rgb(0, 100, 25);
	}
</style>

<script>
	import data from '../data/tellimus.json';
	import Card from '$lib/Item.svelte';

	const order = data[0];
</script>

<h1>Index Page</h1>

<div class="container">
	<Card node={order} />
</div>

<style>
	.container {
		padding: 16px;
	}
</style>

<script>
	import { parseCsv } from '../utils/parseCsv.js';
	import Order from '$lib/Order.svelte';
	import { getMatrialNames } from '../utils/getAllMaterials.js';

	const handleSelect = (e) => {
		const reader = new FileReader();
		const file = e.target.files[0];

		reader.onloadend = (event) => {
			// @ts-ignore
			data = [...data, parseCsv(event.currentTarget.result)];
		};

		reader.readAsText(file);
	};

	const getMaterials = () => {
		console.log(getMatrialNames(data[0]));
	};

	let data = [];
</script>

<h1>Order Page</h1>

<label for="file">Lae tellimuse CSV</label>
<input on:change={handleSelect} type="file" name="file" id="file" accept=".csv" />

<button on:click={getMaterials}>materjalid</button>

<div class="container">
	{#each data as order}
		<Order node={order} />
	{:else}
		<p>Nimekirjas pole tellimusi.</p>
	{/each}
</div>

<style>
	.container {
		padding: 16px;
	}

	label {
		appearance: button;
		padding: 16px;
		margin: 16px;
		border: 1px solid rgb(0, 0, 0);
		border-radius: 4px;
		cursor: pointer;
	}

	input {
		display: none;
	}
</style>

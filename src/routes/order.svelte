<script>
	import { parseCsv } from '../utils/parseCsv.js';
	import Order from '$lib/Order.svelte';
	import { getMatrialNames } from '../utils/getAllMaterials.js';
	import { getPurchasedPartsNames } from '../utils/getAllMaterials.js';
	import { normalizeCsv } from '../utils/normalize.js';

	const handleSelect = (e) => {
		const fileReader = new FileReader();
		const file = e.target.files[0];
		// console.log(file);
		if (file.name.split('.')[file.name.split('.').length - 1] !== 'csv')
			throw new Error('not csv file');

		fileReader.onloadend = (event) => {
			// @ts-ignore
			const normalSet = normalizeCsv(event.currentTarget.result);
			data = [...data, parseCsv(normalSet)];
		};

		fileReader.readAsText(file);
	};

	const getMaterials = () => {
		console.log(getMatrialNames(data[0]));
	};

	const getPurchasedParts = () => {
		console.log(getPurchasedPartsNames(data[0]));
	};

	let data = [];
</script>

<h1>Order Page</h1>

<label for="file">Lae tellimuse CSV</label>
<input on:change={handleSelect} type="file" name="file" id="file" accept=".csv" />

<button on:click={getMaterials}>materjalid</button>
<button on:click={getPurchasedParts}>ostutooted</button>

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

	label,
	button {
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

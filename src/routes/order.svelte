<script>
	import { parseCsv } from '../utils/parseCsv.js';
	import Order from '$lib/Order.svelte';
	import { getMatrialNames } from '../utils/getAllMaterials.js';
	import { getPurchasedPartsNames } from '../utils/getAllMaterials.js';
	import { normalizeCsv } from '../utils/normalize.js';

	let data = [];
	let error = '';

	const handleCsv = (event) => {
		// remove all duplicate rows from csv
		const csvString = event.currentTarget.result;

		const normalSet = normalizeCsv(csvString);
		//
		data = [...data, parseCsv(normalSet)];
	};

	const handleSelect = (event) => {
		const fileReader = new FileReader();
		const file = event.target.files[0];
		// isValidFileType() - returns true if file extension is .csv
		const errorMessage = 'Data upload failed. This was not .csv file.';
		error = '';
		if (file.name.split('.')[file.name.split('.').length - 1] !== 'csv') error = errorMessage;
		/**
		 * file content needs to validate too
		 * headers have to be correct one's
		 */
		// hasValidHeaders() - returns true if csv headers are correct
		fileReader.onloadend = handleCsv;

		fileReader.readAsText(file);
	};

	const getMaterials = () => {
		console.log(getMatrialNames(data[0]));
	};

	const getPurchasedParts = () => {
		console.log(getPurchasedPartsNames(data[0]));
	};
</script>

<h1>Order Page</h1>

<label for="file">lae tellimuse csv</label>
<input on:change={handleSelect} type="file" name="file" id="file" accept=".csv" />

<button on:click={getMaterials}>materjalid</button>
<button on:click={getPurchasedParts}>ostutooted</button>

{#if error}
	<p class="error">{error}</p>
{/if}
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
		font: inherit;
		font-variant: small-caps;
		padding: 16px;
		margin: 16px;
		border: 1px solid rgb(0, 0, 0);
		border-radius: 4px;
		cursor: pointer;
	}

	input {
		display: none;
	}

	.error {
		margin: 16px;
		color: orangered;
	}
</style>

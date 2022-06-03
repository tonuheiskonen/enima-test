<script>
	let odometerFrom = 0;
	let odometerTo = 0;
	let month;
	let result = [];
	let sum = 0;

	const GOAL = 667;

	function formatDate(time) {
		// new Date().toLocaleDateString('et');
		return new Date(time).toLocaleDateString('et', { day: '2-digit', month: 'long' });
	}

	function generateRandom(options) {
		return options.min + Math.round(Math.random() * (options.max - options.min));
	}

	function getRowsCount() {
		return generateRandom({
			min: 5,
			max: 7,
			step: 1
		});
	}

	function getKmsCount() {
		return generateRandom({
			min: 40,
			max: 180,
			step: 1
		});
	}

	function generateJurnal() {
		console.log('generating ...');
		const rows = getRowsCount();
		const kms = [];
		for (let index = 0; index < rows - 1; index++) {
			kms[index] = getKmsCount();
		}
		kms.push(GOAL - kms.reduce((s, i) => s + i, 0));

		if (kms[kms.length - 1] > 180) return generateJurnal();
		if (kms[kms.length - 1] < 40) return generateJurnal();

		console.log(kms);

		result = [];
		let time = new Date(2022, month).getTime();

		let start = odometerFrom;
		for (let index = 0; index < rows; index++) {
			time = time + 1000 * 60 * 60 * 24 * 4;
			result = [
				...result,
				{
					time,
					start,
					end: start + kms[index],
					kms: kms[index]
				}
			];
			start = start + 4 * 64 + kms[index];
		}
	}

	// $: generateJurnal(month);
</script>

<h2>Sõidupäeviku generaator</h2>

<div class="actions">
	<input bind:value={odometerFrom} type="number" />
	<input bind:value={odometerTo} type="number" />
	<select bind:value={month} name="month" id="month">
		<option value="0">jaanuar</option>
		<option value="1">veebruar</option>
		<option value="2">märts</option>
		<option value="3">aprill</option>
		<option value="4">mai</option>
		<option value="5">juuni</option>
		<option value="6">juuli</option>
		<option value="7">august</option>
		<option value="8">september</option>
		<option value="9">oktoober</option>
		<option value="10">november</option>
		<option value="11">detsember</option>
	</select>
	<button on:click={generateJurnal}>genereeri</button>
</div>

<h2>sõidetud kilomeetrid:</h2>
<table>
	{#each result as day}
		<tr>
			<td class="date">{formatDate(day.time)}</td>
			<td>{day.start}</td>
			<td> {day.end} </td>
			<td> {day.kms} </td>
		</tr>
	{/each}
</table>

<!-- {JSON.stringify(result)} -->
<style>
	.actions {
		display: flex;
	}
	input,
	select,
	button {
		margin: 16px 1px;
		padding: 16px;
		font: inherit;
		font-size: 20px;
		border: 1px solid rgba(0, 0, 0, 0.25);
		border-radius: 4px;
		width: 160px;
	}
	td {
		text-align: right;
		padding: 16px;
		border: 1px solid rgba(0, 0, 0, 0.25);
		border-radius: 4px;
		width: 160px;
		background-color: rgba(95, 158, 160, 0.25);
	}
</style>

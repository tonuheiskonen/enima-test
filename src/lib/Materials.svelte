<script>
	export let node;

	const toggle = () => {
		node.expanded = !node.expanded;
	};

	const asc = (a, b) => {
		if (a.toUpperCase() < b.toUpperCase()) return -1;
		if (a.toUpperCase() > b.toUpperCase()) return +1;
		return 0;
	};
</script>

<div class="materials" on:click={toggle}>
	<span class="type">List</span>
	{node.name}
	{#if node.expanded}
		{#each node.list.sort(asc) as item}
			<ul>
				<li class="item-name">{item}</li>
			</ul>
		{/each}
	{/if}
</div>

<style>
	.materials {
		position: relative;
		margin: 8px 0;
	}

	.materials::before {
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

	div {
		position: relative;
		/* display: flex; */
		padding: 24px 16px 16px 16px;
		color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.15);
		border: 1px solid rgb(0, 0, 0);
		border-radius: 4px;
		cursor: pointer;
	}

	div:hover {
		background-color: rgba(0, 0, 0, 0.25);
	}

	ul {
		padding-left: 16px;
	}

	li {
		padding-top: 8px;
	}
</style>

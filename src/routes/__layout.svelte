<nav>
	<a href="/">home</a>
	<a href="/order">orders</a>
	<a href="/file-explorer">file explorer</a>
	<a href="/jurnal-generator">jurnal generator</a>
</nav>

<slot />

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:global(body) {
		font-family: sans-serif;
		margin: 16px;
	}

	nav {
		margin-bottom: 32px;
	}

	a {
		text-transform: uppercase;
	}
</style>

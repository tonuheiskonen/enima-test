<script>
	import { setContext, onMount, getAllContexts } from 'svelte';

	export let width;
	export let height;

	/**
	 * @type {HTMLCanvasElement}
	 */
	let canvas = null;
	const drawFunctions = [];

	setContext('canvas', {
		/**
		 * @param {function} drawFunction
		 */
		register(drawFunction) {
			drawFunctions.push(drawFunction);
		},
		unRegister(drawFunction) {
			drawFunctions.splice(drawFunctions.indexOf(drawFunction), 1);
		}
	});

	onMount(() => {
		const context = canvas.getContext('2d');

		function update() {
			// context.fillStyle = 'lightblue';
			// context.fillRect(0, 0, canvas.width, canvas.height);
			drawFunctions.forEach((draw) => draw(context));
			animationFrame = requestAnimationFrame(update);
		}
		let animationFrame = requestAnimationFrame(update);

		return () => {
			console.log('animation cancelled');
			cancelAnimationFrame(animationFrame);
		};
	});
</script>

<canvas bind:this={canvas} {width} {height} />
<slot />

<style>
	canvas {
		image-rendering: pixelated;
		padding: 16px;
		background-color: rgb(200, 200, 200);
		border: 1px solid black;
	}
</style>

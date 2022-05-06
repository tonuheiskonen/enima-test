<script>
	import { getContext, onMount } from 'svelte';
	const { register, unRegister } = getContext('canvas');

	export let x = 0;
	export let y = 0;
	export let w = 50;
	export let h = 10;
	export let color = 'teal';

	const draw = (/** @type {CanvasRenderingContext2D} */ context) => {
		const gradient = context.createLinearGradient(
			0,
			context.canvas.height - y,
			0,
			context.canvas.height - (y + h)
		);

		// Add three color stops
		gradient.addColorStop(1, 'white');
		gradient.addColorStop(0, color);

		context.imageSmoothingEnabled = false;
		context.lineWidth = 1;
		context.fillStyle = gradient;
		// context.fillStyle = 'lightblue';
		context.strokeStyle = 'black';
		context.beginPath();
		context.rect(x + 0.5, context.canvas.height - (y + h + 0.5), w, h);
		context.fill();
		context.stroke();
		context.closePath();
	};

	onMount(() => {
		register(draw);
		return () => unRegister(draw);
	});
</script>

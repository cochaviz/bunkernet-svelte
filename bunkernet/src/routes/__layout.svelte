<script>
	import Nav from '../components/nav.svelte';
	import Foot from '../components/foot.svelte';
	import '../app.css';
	import '../tailwind.css';
</script>

<div class="min-h-screen w-5/6 max-w-6xl flex flex-col mx-auto">
	<Nav />
	<div class="sm:px-8 mb-auto">
		<slot />
	</div>
	<Foot />
</div>

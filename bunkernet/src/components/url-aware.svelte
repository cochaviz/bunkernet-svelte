<script>
	import { page } from '$app/stores';

	export let text = 'text here';
	export let link;
</script>

<a class="navtitle" class:selected={$page.url.pathname === link} href={link}>{text}</a>

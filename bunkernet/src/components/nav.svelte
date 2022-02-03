<script>
	import UrlAware from '../components/url-aware.svelte';
</script>

<nav class="py-4 justify-center w-full">
	<div class="flex flex-row-reverse">
		<UrlAware class="navtitle" link={'/blog'} text={'$BLOG'} />
		<UrlAware class="navtitle" link={'/'} text={'$HOME'} />
	</div>
</nav>

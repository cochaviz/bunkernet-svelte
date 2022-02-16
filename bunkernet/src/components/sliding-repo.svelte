<script>
	export let repo;
</script>

<a
	class="no-underline bg-gray-light dark:bg-gray p-6 border-2 transform text-center rounded-xl hover:border-cyan flex flex-col gap-4 justify-center"
	href={`${repo.html_url}`}
>
	<h2 class="uppercase text-2xl">{repo.name}</h2>
	<p class="dark:text-dark text-light font-sans">{repo.description}</p>
</a>

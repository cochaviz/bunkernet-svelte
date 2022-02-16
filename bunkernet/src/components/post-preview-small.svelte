<script>
	export let post;
</script>

<a class="bg-gray-light dark:bg-gray no-underline list-none hover:border-cyan p-6 rounded-md border-2" href={`/blog/${post.postid}`}>
	<h2 class="uppercase text-2xl text-left m-2"> {post.data.title}</h2>
	<h3 class="text-light dark:text-dark m-2">{post.data.date}</h3>
	<div class="flex">
		{#each post.data.tags as tag}
			<p class="mx-2 text-lg text-unselected">
				#{tag}
			</p>
		{/each}
	</div>
</a>

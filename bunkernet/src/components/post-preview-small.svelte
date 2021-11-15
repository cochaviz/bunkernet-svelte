<script>
    export let post;
</script>

<a class="no-underline list-none p-6 rounded-md hover:bg-gray" href={`/blog/${post.postid}`}>
    <h2 class="uppercase text-2xl text-left m-2">> {post.data.title}</h2>
    <h3 class="text-dark m-2">{post.data.date}</h3>
    <div class="flex">
        {#each post.data.tags as tag}
        <p class="mx-2 text-lg text-unselected">
            #{tag}
        </p>
        {/each}
    </div>
</a>

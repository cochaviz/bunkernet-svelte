<script>
    export let post;
</script>

<a class="list-none p-6 bg-gray-100 text-center rounded-md hover:border-cyan flex flex-col items-center border-2 border-white" href={`${post.url}`}>
    <h2 class="uppercase text-2xl">{post.title}</h2>
    <ul>
        {#each post.tags as tag}
            <li>{tag}</li>
        {/each}
    </ul>
</a>

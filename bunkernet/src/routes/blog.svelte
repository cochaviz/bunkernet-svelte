<script>
    import Typewriter from "../components/typewriter.svelte";
    import PostPreview from "../components/post-preview-small.svelte";
    import {posts, fetchPosts} from "../poststore";
    import {onMount} from "svelte";

    onMount(() => {
        fetchPosts();
    });
    $: numPosts = $posts.length;
</script>

<!--Blog--->

<div id="Posts" class="flex-col justify-around py-16 sm:py-32 gap-8 mx-auto mb-8">
    <div class="h-full flex flex-col justify-evenly">
        <Typewriter
            clazz={"font-semibold text-2xl md:text-5xl"}
            alt_color={"text-cyan dark:text-cyan"}
            command={"ls -al ~/Posts"}
            result={`total ${numPosts}`}
        />
    </div>
</div>

<!--List of posts-->

<div class="grid gap-4 sm:px-16 pb-16">
    {#each $posts as post}
        <PostPreview post={post}/>
    {/each}
</div>

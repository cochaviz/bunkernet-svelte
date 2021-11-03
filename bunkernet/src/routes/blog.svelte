<script>
    import Typewriter from "../components/typewriter.svelte";
    import PostPreview from "../components/post-preview-small.svelte";
    import {posts, fetchPosts} from "../poststore";
    import {onMount} from "svelte";

    onMount(() => {
        fetchPosts();
    });
    console.log($posts);

    $: numPosts = $posts.length;
</script>

<!--Home--->

<div id="Posts" class="h-screen flex flex-col justify-around pb-8 gap-8 mx-auto mb-8">
    <div class="h-full flex flex-col justify-evenly">
        <Typewriter
            clazz={"font-semibold text-2xl md:text-5xl"}
            alt_color={"text-cyan dark:text-cyan"}
            command={"ls -al ~/Posts"}
            result={`total ${numPosts}`}
        />
    </div>
    <div class="grid num-cols-2 sm:p-16">
        {#each $posts as post}
            <PostPreview post={post}/>
        {/each}
    </div>
</div>

<script context="module">
    export async function load({ page, fetch, session, stuff }) {
        const url = `/blog/all.json`;
        const res = await fetch(url);

        if (res.ok) {
            const { posts } = await res.json();

            return {
                props: {
                    posts
                }
            };
        }
        return {
            status: res.status,
            error: new Error(`Could not load ${url}`)
        };
    }
</script>

<script>
    import Typewriter from "../components/typewriter.svelte";
    import PostPreview from "../components/post-preview-small.svelte";

    export let posts;
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

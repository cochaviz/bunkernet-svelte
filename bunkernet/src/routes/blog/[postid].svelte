<script context="module">
    import fs from "fs";
    import org from "org";

    export async function load({ page, fetch, session, stuff }) {
        const url = `/blog/${page.params.postid}.json`;
        const res = await fetch(url);

        if (res.ok) {
            const { post : postHTML } = await res.json();

            return {
                props: {
                    post : postHTML
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
 import hljs from 'highlight.js';
 import {onMount} from "svelte";

 export let post;
 onMount(() => {
     hljs.highlightAll();
 });
</script>

<org>{@html post}</org>
<div class="m-8 sm:m-16"></div>

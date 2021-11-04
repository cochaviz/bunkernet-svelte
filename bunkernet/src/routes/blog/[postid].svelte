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
    export let post;
</script>

<org>{@html post}</org>

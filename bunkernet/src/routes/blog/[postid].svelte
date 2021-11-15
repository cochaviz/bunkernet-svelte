<script context="module">
    import { parseRaw } from "./orgparser";

    export async function load({ page, fetch, session, stuff }) {
        const url = `/posts/${page.params.postid}.org`;
        const res = await fetch(url);

        if (res.ok) {
            const contents = await res.text();

            return {
                props: {
                    post : parseRaw(contents)
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
 import { onMount } from "svelte";
 import CopyButton from "../../components/copy-button.svelte";
 import hljs from 'highlight.js';
 import katex from 'katex';

 export let post;

 onMount(() => {
    hljs.highlightAll();
    renderLatex(); // This function is defined in app.html

    // Buttons in code blocks
    let pres = document.getElementsByTagName("pre");

    for (const pre in pres) {
        const preDiv = document.createElement("div");
        preDiv.setAttribute("class", "copy_button_container");

        const preCopy = pres[pre];

        pres[pre].replaceWith(preDiv);
        preDiv.appendChild(preCopy);

        const button = new CopyButton({
            target: preCopy,
            anchor: null,
            props: {
                parent: preCopy,
            },
        });
    }
 });
</script>

<div class="max-w-5xl mx-auto" id="org">{@html post.toString()}</div>
<div class="m-8 sm:m-16"></div>

<script context="module">
	import { parseRaw } from './orgparser';

	export async function load({ url, params, fetch }) {
		const res = await fetch(`/posts/${params.postid}.org`);

		if (res.ok) {
			const contents = await res.text();

			return {
				props: {
					post: parseRaw(contents)
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

<div class="max-w-5xl mx-auto" id="org">{@html post.toString()}</div>
<div class="m-8 sm:m-16" />

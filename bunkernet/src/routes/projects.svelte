<script>
    import Repo from '../components/repo.svelte';
    import {repos, fetchRepos} from "../repostore"

    fetchRepos(['dotfiles', 'BattleDucks', 'gopy', 'wikiscraper', 'dotfield', 'music-bot-family']);
</script>

<div class="py-4 grid gap-8 md:grid-cols-2 grid-cols-1">
    {#each $repos as repo}
            <Repo repo={repo}/>
    {/each}
</div>

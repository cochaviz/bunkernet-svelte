<script>	
    import Typewriter from "../components/typewriter.svelte";
    import SlidingRepo from "../components/sliding-repo.svelte";
    import {repos, fetchRepos} from "../repostore"

    fetchRepos(['dotfiles', 'BattleDucks', 'gopy', 'wikiscraper', 'dotfield', 'music-bot-family']);
</script>

<!--Home--->

<div class="flex flex-col justify-between border-b-2 pb-8 sm:pt-8 gap-8 border-green mx-auto mb-8">
    <Typewriter 
        clazz={"font-semibold text-2xl md:text-5xl"}
        alt_color={"text-cyan dark:text-cyan"}
        command={"echo \"Hi, my name is $(whoami)\\!\""} 
        result={"Hi, my name is Zohar!"}
    />
    <div class="sm:px-16 md:pt-32">
        <p class="sm:w-4/5">
        I’m a Computer Science student who is very much into learning about anything! This is the place where I collect most interesting things I come accross, so feel free to have a look and see if there is anything that catches your eye! :)
        </p>
        <div class="w-full pt-8 flex flex-row-reverse gap-4">
            <a target="_blank" href="https://github.com/zoharcochavi"><img class="transform hover:scale-110 w-8 sm:w-12" src="/github_logo.png" alt="Github profile of Zohar Cochavi"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/zoharcochavi/"><img class="transform hover:scale-110 w-8 sm:w-12" src="/linkedin_logo.png" alt="Linkedin profile of Zohar Cochavi"/></a>
        </div>
    </div>
</div>

<!--Projects--->

<div class="flex flex-col pt-8">
    <Typewriter 
        alt_color={"text-green dark:text-green"}
        clazz={"font-semibold text-2xl md:text-5xl"}
        command={"ls -l ~/Projects"} 
        result={`total ${$repos.length}`}
    />
    <div class="grid num-cols-1 sm:p-16">
        {#each $repos as repo}
            <div class="flex gap-16 space-around sm:odd:flex-row sm:even:flex-row-reverse flex-col border-b-2 border-lightdark py-16">
                <img class="w-4/5 mx-auto" src={`${repo.name}.png`} alt={repo.name}/>
                <SlidingRepo repo={repo}/>
            </div>
        {/each}
    </div>
</div>

<script>	
    import Typewriter from "../components/typewriter.svelte";
    import SlidingRepo from "../components/sliding-repo.svelte";
    import {repos, fetchRepos} from "../repostore"

    fetchRepos(['dotfiles', 'BattleDucks', 'gopy', 'wikiscraper', 'dotfield', 'music-bot-family']);
</script>

<!--Home--->

<div class="xl:h-96 flex flex-col justify-between border-b-2 pb-8 sm:pt-8 gap-8 border-green mx-auto mb-8">
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
            <a target="_blank" href="https://github.com/zoharcochavi"><img class="transform hover:scale-110" src="/github_logo.png" width=32 height=32 alt="Github profile of Zohar Cochavi"/></a>
            <a target="_blank" href="https://www.linkedin.com/in/zoharcochavi/"><img class="transform hover:scale-110" src="/linkedin_logo.png" width=32 height=32 alt="Linkedin profile of Zohar Cochavi"/></a>
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
    <div class="grid num-cols-1 gap-16 p-16">
        {#each $repos as repo}
            <div class="odd:mr-auto even:ml-auto w-2/3">
                <SlidingRepo repo={repo}/>
            </div>
        {/each}
    </div>
</div>

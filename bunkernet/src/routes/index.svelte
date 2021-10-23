<script>	
    import Typewriter from "../components/typewriter.svelte";
    import SlidingRepo from "../components/sliding-repo.svelte";
    import {repos, fetchRepos} from "../repostore";
    import {onMount} from "svelte";

    onMount(() => {
        fetchRepos();
    });

    $: numRepos = $repos.length;
</script>

<!--Home--->

<div id="Home" class="h-screen flex flex-col justify-around border-b-2 pb-8 gap-8 border-green mx-auto mb-8">
    <div class="h-full flex flex-col justify-evenly">
        <Typewriter 
            clazz={"font-semibold text-2xl md:text-5xl"}
            alt_color={"text-cyan dark:text-cyan"}
            command={"echo \"Hi, my name is $(whoami)\\!\""} 
            result={"Hi, my name is Zohar!"}
        />
        <p class="sm:px-16 lg:w-4/5">
        "I’m a Computer Science student who is very much into learning about anything! This is the place where I collect most interesting things I come across, so feel free to have a look and see if there is anything that catches your eye! :)"
        </p>
    </div>
    <div class="w-full lg:px-16 sm:pb-8 flex flex-row-reverse gap-4">
        <a target="_blank" href="https://github.com/zoharcochavi"><img class="transform hover:scale-110 w-8 sm:w-12" src="/github_logo.png" alt="Github profile of Zohar Cochavi"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/zoharcochavi/"><img class="transform hover:scale-110 w-8 sm:w-12" src="/linkedin_logo.png" alt="Linkedin profile of Zohar Cochavi"/></a>
    </div>
</div>

<!--Projects--->

<div class="flex flex-col pt-16 sm:pt-64">
    <Typewriter 
        alt_color={"text-green dark:text-green"}
        clazz={"font-semibold text-2xl md:text-5xl"}
        command={"ls -l ~/Projects"} 
        result={`total ${numRepos}`}
        idle={false}
    />
    <div class="grid num-cols-1 sm:p-16">
        {#each $repos as repo}
            <div class="flex gap-16 space-around sm:odd:flex-row sm:even:flex-row-reverse flex-col border-b-2 dark:border-gray border-gray-light py-16 sm:py-64">
                <img class="w-4/5 mx-auto" src={`${repo.name}.png`} alt={repo.name}/>
                <SlidingRepo repo={repo}/>
            </div>
        {/each}
    </div>
</div>

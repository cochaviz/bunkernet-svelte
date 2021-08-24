<script>
    export let repo;
</script>

<a class="bg-lightdark p-6 shadow-xl hover:shadow-2xl transform hover:scale-105 text-center rounded-md hover:border-cyan flex flex-col gap-4 justify-center" href={`${repo.html_url}`}>
    <h2 class="uppercase text-2xl">{repo.name}</h2>
    <p>{repo.description}</p>
</a>


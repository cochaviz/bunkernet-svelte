<script>
    export let repo;
</script>

<a class="list-none p-6 bg-gray-100 text-center rounded-md hover:border-cyan flex flex-col items-center border-2 border-white" href={`${repo.html_url}`}>
    <h2 class="uppercase text-2xl">{repo.name}</h2>
    <p>{repo.description}</p>
</a>


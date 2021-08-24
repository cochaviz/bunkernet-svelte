<script>
    import UrlAware from '../components/url-aware.svelte';
</script>

<nav class="p-4 justify-center w-full">
    <div>
        <div class="flex flex-row-reverse">
            <UrlAware class="navtitle" link={"/guides"} text={"Guides"} />
            <UrlAware class="navtitle" link={"/"} text={"Home"} />
        </div>
    </div>
</nav>

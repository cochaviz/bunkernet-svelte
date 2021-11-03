<script>
    import UrlAware from '../components/url-aware.svelte';
</script>

<nav class="p-4 justify-center w-full">
    <div>
        <div class="flex flex-row-reverse">
            <UrlAware class="navtitle" link={"/blog"} text={"$BLOG"} />
            <UrlAware class="navtitle" link={"/"} text={"$HOME"} />
        </div>
    </div>
</nav>

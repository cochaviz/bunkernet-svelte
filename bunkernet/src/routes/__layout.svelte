<script>
    import Nav from "../components/nav.svelte"    
    import '../app.css';
    import '../tailwind.css';
</script>

<div class="w-5/6 mx-auto">
    <Nav/>
    <div class="px-1 pb-1 sm:px-8 sm:pb-8">
        <slot/>
    </div>
</div>


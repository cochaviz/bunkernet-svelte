<script>
    import Nav from "../components/nav.svelte"    
    import '../app.css';
    import '../tailwind.css';
</script>

<div class="px-8 max-w-6xl mx-auto">
    <Nav/>
    <div class="p-8">
        <slot/>
    </div>
</div>


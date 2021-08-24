<script>
    import Nav from "../components/nav.svelte"    
    import '../app.css';
    import '../tailwind.css';
</script>

<div class="h-screen sm:max-w-7xl w-5/6 mx-auto">
    <Nav/>
    <div class="h-full px-1 pb-1 sm:px-8">
        <slot class="h-full"/>
    </div>
</div>


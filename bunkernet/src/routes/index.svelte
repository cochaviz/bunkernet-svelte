<script>	
    import Typewriter from "../components/typewriter.svelte";
</script>

<div class="max-h-screen min-h-1/2 grid justify-between border-b-2 pb-16 border-green num-cols-1 num-rows-3 gap-4">
    <Typewriter 
        command={"echo \"Hey, my name is $USER\\!\""} 
        result={"Hey, my name is Zohar!"}
    />
    <p class="sm:w-2/3 ">
    I’m a Computer Science student who is very much into learning about anything! This is the place where I collect most interesting things I come accross, so feel free to have a look to if there is anything that catches your eye! :)
    </p>
</div>

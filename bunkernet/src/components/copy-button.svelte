<script>
 export let parent;

 function copyToClipBoard() {
    let content = parent.innerText || parent.textContent;
    navigator.clipboard.writeText(content);
 }
</script>

<button class="copy_button" on:click={copyToClipBoard} >
    <img src="/copy.png" alt="copy"/>
</button>

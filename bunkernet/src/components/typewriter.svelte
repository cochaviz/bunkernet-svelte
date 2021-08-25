<script>	
    import { onMount } from 'svelte';

    export let command;
    export let result;
    export let clazz;
    export let alt_color;
    export let idle = true;

    let resultDiv;
    let typer;
    let nextline;

    function setupTypewriter(t, c, r) {
      var HTML = c

      var cursorPosition = 0,
          tag = "",
          writingTag = false,
          tagOpen = false,
          typeSpeed = 100,
        tempTypeSpeed = 0;

      var type = function() {
        
          if (writingTag === true) {
              tag += HTML[cursorPosition];
          }

          if (HTML[cursorPosition] === "<") {
              tempTypeSpeed = 0;
              if (tagOpen) {
                  tagOpen = false;
                  writingTag = true;
              } else {
                  tag = "";
                  tagOpen = true;
                  writingTag = true;
                  tag += HTML[cursorPosition];
              }
          }
          if (!writingTag && tagOpen) {
              tag.innerHTML += HTML[cursorPosition];
          }
          if (!writingTag && !tagOpen) {
              if (HTML[cursorPosition] === " ") {
                  tempTypeSpeed = 0;
              }
              else {
                  tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              }
              t.innerHTML += HTML[cursorPosition];
          }
          if (writingTag === true && HTML[cursorPosition] === ">") {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
              writingTag = false;
              if (tagOpen) {
                  var newSpan = document.createElement("span");
                  t.appendChild(newSpan);
                  newSpan.innerHTML = tag;
                  tag = newSpan.firstChild;
              }
          }

          cursorPosition += 1;
          if (cursorPosition < HTML.length) {
              setTimeout(type, tempTypeSpeed);
          } else {
            setTimeout(() => {
                if ( r !== "" ) {
                    resultDiv.innerHTML = r;
                    resultDiv.classList += clazz + " " + alt_color;
                }
                if ( idle ) {
                    nextline.classList += clazz + " flex gap-4" ;
                }
                typer.id = "" ;
            }, 3 * tempTypeSpeed);
          }
      };

      return {
          type: type
      };
    }

    onMount(() => {
        typewriter = setupTypewriter(typer, command, result);
        typewriter.type();
    });
</script>

<div class={clazz + " grid font-mono gap-2 sm:gap-8 auto-rows-auto"}>
    <div class={clazz + " flex"}>
        <div class="pr-6">$</div>
        <div id="typewriter" bind:this={typer}/>
    </div>
    <div class={"invisible"} bind:this={resultDiv}>{result}</div>
    <div bind:this={nextline} class="invisible">
        <div class="pr-6">$</div>
        <div id="typewriter"/>
    </div>
</div>

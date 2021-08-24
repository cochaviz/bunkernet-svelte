<script>	
    import { onMount } from 'svelte';

    export let command;
    export let result;
    export let inhclass;

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
                t.innerHTML = r + "<br>";
                t.classList += ["text-cyan dark:text-cyan"];
            }, 10 * tempTypeSpeed);
          }
      };

      return {
          type: type
      };
    }
    let typer;

    onMount(() => {
        typewriter = setupTypewriter(typer, command, result);
        typewriter.type();
    });
</script>

<div id="typewriter" class="font-mono font-bold text-2xl sm:text-5xl text-light dark:text-dark col-span-3" bind:this={typer}>
    $&ensp
</div>

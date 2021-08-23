<script>
  import { page } from '$app/stores';

  export let text = 'text here';
  export let link;
 
</script>

<a class="navtitle" class:selected="{$page.path === link}" href={link}>{text}</a>

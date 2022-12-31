<script>
  import { onMount } from 'svelte';
  import { importComponents } from '../../utils/get-components';
  import { handleInspectCode } from '../../stores';

  export let mainColor;
  let components = [];

  onMount(async () => {
    const data = await importComponents('Buttons');
    components = data;
  });
</script>

{#each components as component}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="w-full max-w-[180px] py-6 flex items-center justify-center border-2 duration-150 cursor-pointer"
    on:click={(event) => handleInspectCode({ ...component, event })}
  >
    <svelte:component this={component.name} {mainColor} />
  </div>
{/each}

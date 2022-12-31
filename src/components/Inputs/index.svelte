<script>
  import { onMount } from 'svelte';
  import { importComponents } from '../../utils/get-components';
  import { handleInspectCode } from '../../stores';
  import PageLoader from '../PageLoader.svelte';
  import { fade } from 'svelte/transition';

  export let mainColor;
  let components = [];
  let isLoading = true;

  onMount(async () => {
    try {
      const data = await importComponents('Inputs');
      components = data;
    } catch (err) {
      console.error(err);
    } finally {
      isLoading = false;
    }
  });
</script>

{#if isLoading}
  <PageLoader />
{:else}
  {#each components as component}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="w-full max-w-[300px] py-6 flex items-center justify-center border-2 duration-150 cursor-pointer"
      on:click={(event) => handleInspectCode({ ...component, event })}
      in:fade
    >
      <svelte:component this={component.name} {mainColor} />
    </div>
  {/each}
{/if}

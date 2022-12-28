<script>
  import Input_1 from './input-1.svelte';
  import Input_2 from './input-2.svelte';
  import Input_3 from './input-3.svelte';
  // import Input_4 from './input-4.svelte';
  import Input_5 from './input-5.svelte';
  import Input_6 from './input-6.svelte';
  import Input_7 from './input-7.svelte';
  import Input_8 from './input-8.svelte';
  import Input_9 from './input-9.svelte';
  import Input_10 from './input-10.svelte';
  import Input_11 from './input-11.svelte';
  import Input_12 from './input-12.svelte';
  import Input_13 from './input-13.svelte';
  import Input_14 from './input-14.svelte';
  import Input_15 from './input-15.svelte';

  import { getSelectedItemCode } from '../../stores';
  export let mainColor;

  const listInputItems = [
    Input_1,
    Input_2,
    Input_3,
    // Input_4,
    Input_5,
    Input_6,
    Input_7,
    Input_8,
    Input_9,
    Input_10,
    Input_11,
    Input_12,
    Input_13,
    Input_14,
    Input_15,
  ];

  const handleInspect = (event, item) => {
    if (event.target !== event.currentTarget) return;
    getSelectedItemCode(item);
  };
</script>

{#each listInputItems as item}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="w-full py-6 flex items-center justify-center border-2 duration-150 cursor-pointer"
    on:click={(e) => handleInspect(e, item.name)}
  >
    <svelte:component this={item} {mainColor} />
  </div>
{/each}

<script>
  import Button_1 from './button-1.svelte';
  import Button_10 from './button-10.svelte';
  import Button_11 from './button-11.svelte';
  import Button_12 from './button-12.svelte';
  import Button_13 from './button-13.svelte';
  import Button_14 from './button-14.svelte';
  import Button_15 from './button-15.svelte';
  import Button_16 from './button-16.svelte';
  import Button_17 from './button-17.svelte';
  import Button_18 from './button-18.svelte';
  import Button_19 from './button-19.svelte';
  import Button_2 from './button-2.svelte';
  import Button_20 from './button-20.svelte';
  import Button_21 from './button-21.svelte';
  import Button_22 from './button-22.svelte';
  import Button_23 from './button-23.svelte';
  import Button_3 from './button-3.svelte';
  import Button_4 from './button-4.svelte';
  import Button_5 from './button-5.svelte';
  import Button_6 from './button-6.svelte';
  import Button_7 from './button-7.svelte';
  import Button_8 from './button-8.svelte';
  import Button_9 from './button-9.svelte';

  export let mainColor;

  const listButtonItems = [
    Button_1,
    Button_2,
    Button_3,
    Button_4,
    Button_5,
    Button_6,
    Button_7,
    Button_8,
    Button_9,
    Button_10,
    Button_11,
    Button_12,
    Button_13,
    Button_14,
    Button_15,
    Button_16,
    Button_17,
    Button_18,
    Button_19,
    Button_20,
    Button_21,
    Button_22,
    Button_23,
  ];
</script>

{#each listButtonItems as item}
  <div
    class="w-full py-6 flex items-center justify-center border-2 duration-150 cursor-pointer"
  >
    <svelte:component this={item} {mainColor} />
  </div>
{/each}

<!-- hover:bg-slate-100 hover:border-transparent -->

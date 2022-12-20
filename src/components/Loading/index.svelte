<script>
  export let mainColor;
  import Loading_1 from './loading-1.svelte';
  import Loading_2 from './loading-2.svelte';
  import Loading_3 from './loading-3.svelte';
  import Loading_4 from './loading-4.svelte';
  import Loading_5 from './loading-5.svelte';
  import Loading_6 from './loading-6.svelte';
  import Loading_7 from './loading-7.svelte';
  import Loading_8 from './loading-8.svelte';
  import Loading_9 from './loading-9.svelte';
  import Loading_10 from './loading-10.svelte';
  import Loading_11 from './loading-11.svelte';
  import Loading_12 from './loading-12.svelte';
  import Loading_13 from './loading-13.svelte';
  import Loading_14 from './loading-14.svelte';
  import Loading_15 from './loading-15.svelte';
  import Loading_16 from './loading-16.svelte';
  import Loading_17 from './loading-17.svelte';
  import Loading_18 from './loading-18.svelte';
  import Loading_19 from './loading-19.svelte';
  import Loading_20 from './loading-20.svelte';
  import Loading_21 from './loading-21.svelte';
  import Loading_22 from './loading-22.svelte';
  import Loading_23 from './loading-23.svelte';

  const itemCss =
    'w-full aspect-square flex items-center justify-center border-2 hover:bg-slate-100 hover:border-transparent duration-150 cursor-pointer';

  const listLoadingItems = [
    Loading_1,
    Loading_2,
    Loading_3,
    Loading_4,
    Loading_5,
    Loading_6,
    Loading_7,
    Loading_8,
    Loading_9,
    Loading_10,
    Loading_11,
    Loading_12,
    Loading_13,
    Loading_14,
    Loading_15,
    Loading_16,
    Loading_17,
    Loading_18,
    Loading_19,
    Loading_20,
    Loading_21,
    Loading_22,
    Loading_23,
  ];
</script>

{#each listLoadingItems as item}
  <div class={itemCss}>
    <svelte:component this={item} {mainColor} />
  </div>
{/each}

<script>
  export let mainColor;
  import Loader_1 from './loader-1.svelte';
  import Loader_2 from './loader-2.svelte';
  import Loader_3 from './loader-3.svelte';
  import Loader_4 from './loader-4.svelte';
  import Loader_5 from './loader-5.svelte';
  import Loader_6 from './loader-6.svelte';
  import Loader_7 from './loader-7.svelte';
  import Loader_8 from './loader-8.svelte';
  import Loader_9 from './loader-9.svelte';
  import Loader_10 from './loader-10.svelte';
  import Loader_11 from './loader-11.svelte';
  import Loader_12 from './loader-12.svelte';
  import Loader_13 from './loader-13.svelte';
  import Loader_14 from './loader-14.svelte';
  import Loader_15 from './loader-15.svelte';
  import Loader_16 from './loader-16.svelte';
  import Loader_17 from './loader-17.svelte';
  import Loader_18 from './loader-18.svelte';
  import Loader_19 from './loader-19.svelte';
  import Loader_20 from './loader-20.svelte';
  import Loader_21 from './loader-21.svelte';
  import Loader_22 from './loader-22.svelte';
  import Loader_23 from './loader-23.svelte';
  import Loader_24 from './loader-24.svelte';
  import Loader_25 from './loader-25.svelte';
  import Loader_26 from './loader-26.svelte';
  import Loader_27 from './loader-27.svelte';
  import Loader_28 from './loader-28.svelte';
  import Loader_29 from './loader-29.svelte';
  import Loader_30 from './loader-30.svelte';
  import Loader_31 from './loader-31.svelte';
  import Loader_32 from './loader-32.svelte';
  import Loader_33 from './loader-33.svelte';
  import Loader_34 from './loader-34.svelte';
  import Loader_35 from './loader-35.svelte';
  import Loader_36 from './loader-36.svelte';
  import Loader_37 from './loader-37.svelte';
  import Loader_38 from './loader-38.svelte';
  import Loader_39 from './loader-39.svelte';
  import Loader_40 from './loader-40.svelte';
  import Loader_41 from './loader-41.svelte';
  import Loader_42 from './loader-42.svelte';
  import Loader_43 from './loader-43.svelte';
  import Loader_44 from './loader-44.svelte';
  import Loader_45 from './loader-45.svelte';
  import Loader_46 from './loader-46.svelte';
  import Loader_47 from './loader-47.svelte';
  import Loader_48 from './loader-48.svelte';
  import Loader_49 from './loader-49.svelte';
  import Loader_50 from './loader-50.svelte';
  import Loader_51 from './loader-51.svelte';
  import Loader_52 from './loader-52.svelte';
  import Loader_53 from './loader-53.svelte';
  import Loader_54 from './loader-54.svelte';
  import Loader_55 from './loader-55.svelte';
  import Loader_56 from './loader-56.svelte';
  import Loader_57 from './loader-57.svelte';
  import Loader_58 from './loader-58.svelte';
  import Loader_59 from './loader-59.svelte';
  import Loader_60 from './loader-60.svelte';
  import Loader_61 from './loader-61.svelte';
  import Loader_62 from './loader-62.svelte';
  import Loader_63 from './loader-63.svelte';

  const listLoaderItems = [
    Loader_1,
    Loader_2,
    Loader_3,
    Loader_4,
    Loader_5,
    Loader_6,
    Loader_7,
    Loader_8,
    Loader_9,
    Loader_10,
    Loader_11,
    Loader_12,
    Loader_13,
    Loader_14,
    Loader_15,
    Loader_16,
    Loader_17,
    Loader_18,
    Loader_19,
    Loader_20,
    Loader_21,
    Loader_22,
    Loader_23,
    Loader_24,
    Loader_25,
    Loader_26,
    Loader_27,
    Loader_28,
    Loader_29,
    Loader_30,
    Loader_31,
    Loader_32,
    Loader_33,
    Loader_34,
    Loader_35,
    Loader_36,
    Loader_37,
    Loader_38,
    Loader_39,
    Loader_40,
    Loader_41,
    Loader_42,
    Loader_43,
    Loader_44,
    Loader_45,
    Loader_46,
    Loader_47,
    Loader_48,
    Loader_49,
    Loader_50,
    Loader_51,
    Loader_52,
    Loader_53,
    Loader_54,
    Loader_55,
    Loader_56,
    Loader_57,
    Loader_58,
    Loader_59,
    Loader_60,
    Loader_61,
    Loader_62,
    Loader_63,
  ];
</script>

{#each listLoaderItems as item}
  <div
    class="w-full aspect-square flex items-center justify-center border-2 hover:bg-slate-100 hover:border-transparent duration-150 cursor-pointer"
  >
    <svelte:component this={item} {mainColor} />
  </div>
{/each}

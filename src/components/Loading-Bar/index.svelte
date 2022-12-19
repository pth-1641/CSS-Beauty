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

  const itemCss =
    'w-full aspect-square flex items-center justify-center border-2 hover:bg-slate-100 hover:border-transparent duration-150 cursor-pointer';
</script>

<div class={itemCss}>
  <Loading_1 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_2 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_3 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_4 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_5 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_6 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_7 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_8 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_9 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_10 {mainColor} />
</div>
<div class={itemCss}>
  <Loading_11 {mainColor} />
</div>

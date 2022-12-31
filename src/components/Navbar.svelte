<script>
  import SvelteLogo from '../assets/svelte-logo.svg';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let currentPath;
  let openMenu;

  const routes = [
    { label: 'Loader', path: '/loader' },
    { label: 'Input', path: '/input' },
    { label: 'Button', path: '/button' },
  ];

  onMount(() => {
    currentPath = $page.route?.id;
  });
</script>

<div
  class=" fixed top-0 right-0 left-0 px-6 py-2 h-12 flex items-center gap-5 bg-white shadow-sm z-50"
>
  <a href="/" class="flex items-center" on:click={() => (currentPath = '/')}>
    <h3 class="text-xl font-bold text-[#ff3e00]">C</h3>
    <img src={SvelteLogo} alt="CSS Beauty" class="w-6 h-6" />
    <h3 class="text-xl font-bold text-[#ff3e00]">S Beauty</h3>
  </a>
  <ul class="hidden sm:flex mt-1 gap-5">
    {#each routes as route}
      <li class="group">
        <a href={route.path} on:click={() => (currentPath = route.path)}>
          {route.label}
          <div
            class={`w-full h-0.5 bg-black group-hover:scale-x-100 duration-150 ${
              route.path === currentPath ? 'scale-x-100' : 'scale-x-0'
            }`}
          />
        </a>
      </li>
    {/each}
  </ul>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img
    class="sm:hidden h-full ml-auto"
    src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTEgMTYuNzQ1YzAtLjQxNC4zMzYtLjc1Ljc1LS43NWg5LjVjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1aC05LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1em0tOS01YzAtLjQxNC4zMzYtLjc1Ljc1LS43NWgxOC41Yy40MTQgMCAuNzUuMzM2Ljc1Ljc1cy0uMzM2Ljc1LS43NS43NWgtMTguNWMtLjQxNCAwLS43NS0uMzM2LS43NS0uNzV6bTQtNWMwLS40MTQuMzM2LS43NS43NS0uNzVoMTQuNWMuNDE0IDAgLjc1LjMzNi43NS43NXMtLjMzNi43NS0uNzUuNzVoLTE0LjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+"
    alt="menu"
    on:click={() => (openMenu = true)}
  />
  {#if openMenu}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      class="fixed inset-0 bg-[rgba(0,0,0,0.6)]"
      on:click={() => (openMenu = false)}
      transition:fade={{ duration: 250 }}
    >
      <ul
        class="absolute top-0 bottom-0 right-0 w-3/5 bg-white p-4"
        transition:fly={{ x: 300, duration: 250 }}
      >
        {#each routes as route}
          <li class="mb-1 text-lg">
            <a href={route.path} on:click={() => (openMenu = false)}>
              {route.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

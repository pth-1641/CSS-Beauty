<script>
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import { fade, fly } from "svelte/transition";
  import SvelteLogo from "../assets/svelte-logo.svg";
  import { appTheme } from "../stores";

  let currentPath;
  let openMenu;

  const routes = [
    { label: "Loaders", path: "/loader", icon: "tabler:loader" },
    { label: "Inputs", path: "/input", icon: "bi:input-cursor" },
    { label: "Buttons", path: "/button", icon: "fluent:button-16-regular" },
  ];

  const socials = [
    { link: "https://www.facebook.com/pth.1641", icon: "ic:baseline-facebook" },
    { link: "https://github.com/pth-1641/CSS-Beauty", icon: "mdi:github" },
  ];

  $: currentPath = $page.route?.id;

  function toggleDarkMode() {
    const toggleTheme = $appTheme === "dark" ? "light" : "dark";
    appTheme.set(toggleTheme);
    localStorage.setItem("theme", toggleTheme);
  }
</script>

<div
  class="fixed top-0 right-0 left-0 px-6 py-2 h-12 flex items-center justify-between lg:grid grid-cols-3 gap-4 bg-white shadow-sm z-50 dark:bg-[#23272f] duration-300"
>
  <a href="/" class="flex items-center" on:click={() => (currentPath = "/")}>
    <h3 class="text-xl font-bold text-primary">C</h3>
    <img src={SvelteLogo} alt="CSS Beauty" class="w-6 h-6" />
    <h3 class="text-xl font-bold text-primary">S Beauty</h3>
  </a>
  <ul
    class="max-lg:hidden flex mt-1 gap-8 lg:gap-12 items-center justify-center"
  >
    {#each routes as route}
      <li class="group">
        <a href={route.path} on:click={() => (currentPath = route.path)}>
          <div class="flex items-center gap-1 dark:text-white/90 duration-300">
            <Icon icon={route.icon} class="w-5" />
            {route.label}
          </div>
          <div
            class={`w-full h-0.5 group-hover:scale-x-100 duration-150 ${
              route.path === currentPath
                ? "scale-x-100 bg-primary"
                : "scale-x-0 bg-black dark:bg-white/80"
            }`}
          />
        </a>
      </li>
    {/each}
  </ul>
  <div class="flex items-center gap-2 justify-end ml-auto">
    <div class="flex items-center gap-2 max-lg:hidden">
      {#each socials as social}
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          class="hover:!text-primary duration-300 dark:text-white/90"
        >
          <Icon icon={social.icon} class="w-6 h-6" />
        </a>
      {/each}
    </div>
    <button on:click={toggleDarkMode} class="ml-auto lg:ml-4">
      <Icon icon="line-md:light-dark-loop" class="w-6 h-6 text-primary" />
    </button>
  </div>
  <button on:click={() => (openMenu = true)} class="lg:hidden">
    <Icon
      icon="material-symbols-light:menu-rounded"
      class="w-7 h-7 dark:text-white/90 duration-300"
    />
  </button>

  <!-- Sidebar -->
  {#if openMenu}
    <div class="fixed inset-0 lg:hidden">
      <button
        on:click={() => (openMenu = false)}
        transition:fade={{ duration: 250 }}
        class="absolute inset-0 bg-black/75"
      />
      <div
        class="absolute top-0 bottom-0 left-0 w-full max-w-xs bg-white dark:bg-dark dark:text-white/90 p-4 flex flex-col justify-between"
        in:fly={{ x: "-100%", duration: 250 }}
        out:fly={{ x: "-100%", duration: 250 }}
      >
        <div>
          <div class="flex items-center">
            <h3 class="text-xl font-bold text-primary">C</h3>
            <img src={SvelteLogo} alt="CSS Beauty" class="w-6 h-6" />
            <h3 class="text-xl font-bold text-primary">S Beauty</h3>
          </div>
          <ul class="mt-4 space-y-1">
            {#each routes as route}
              <li>
                <a
                  class={`flex items-center gap-1 rounded-full px-4 py-2.5 ${
                    route.path === currentPath
                      ? "bg-primary/10 text-primary"
                      : ""
                  }`}
                  href={route.path}
                  on:click={() => (openMenu = false)}
                >
                  <Icon icon={route.icon} class="w-7" />
                  {route.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
        <div class="flex items-center gap-4 justify-center mb-2">
          {#each socials as social}
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary duration-150"
            >
              <Icon icon={social.icon} class="w-6 h-6" />
            </a>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>

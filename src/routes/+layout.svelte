<script>
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import { onDestroy, onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Footer from "../components/Footer.svelte";
  import Modal from "../components/Modal.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Transition from "../components/Transition.svelte";
  import { appTheme, isOpenModal, isShowToast } from "../stores";
  import "../styles/globals.css";

  let timeout;
  let themeLink;

  function hideToast() {
    if ($isShowToast) {
      timeout = setTimeout(() => {
        isShowToast.set(false);
      }, 2500);
    }
  }

  $: $isShowToast, hideToast();

  onMount(() => {
    const theme = localStorage.getItem("theme") || "light";
    appTheme.set(theme);
    themeLink =
      theme === "dark"
        ? '<link rel="stylesheet" href="/styles/prism-vs-dark.css">'
        : '<link rel="stylesheet" href="/styles/prism-vs-light.css">';
  });

  onDestroy(() => {
    if (timeout) clearTimeout(timeout);
  });
</script>

<svelte:head>
  <title>CSS Beauty - Beautifully simple click-to-copy CSS effects</title>
  <meta
    name="description"
    content="Browse a carefully crafted collection of loaders, hover effects, transitions, and other CSS effects to use in your next project. Effects are designed with an emphasis on fluidity, simplicity, and ease of use."
  />
  <!-- OG -->
  <meta
    name="og:title"
    content="CSS Beauty - Beautifully simple click-to-copy CSS effects"
  />
  <meta
    name="og:description"
    content="Browse a carefully crafted collection of loaders, hover effects, transitions, and other CSS effects to use in your next project. Effects are designed with an emphasis on fluidity, simplicity, and ease of use."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://css-beauty.vercel.app" />
  <meta
    property="og:image"
    content="https://raw.githubusercontent.com/pth-1641/CSS-Beauty/master/static/home.jpg"
  />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="https://css-beauty.vercel.app" />
  <meta property="twitter:url" content="https://css-beauty.vercel.app" />
  <meta
    name="twitter:title"
    content="CSS Beauty - Beautifully simple click-to-copy CSS effects"
  />
  <meta
    name="twitter:description"
    content="Browse a carefully crafted collection of loaders, hover effects, transitions, and other CSS effects to use in your next project. Effects are designed with an emphasis on fluidity, simplicity, and ease of use."
  />
  <meta
    name="twitter:image"
    content="https://raw.githubusercontent.com/pth-1641/CSS-Beauty/master/static/home.jpg"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />

  {#if themeLink}
    {@html themeLink}
  {/if}
</svelte:head>

<div class={`app ${$appTheme}`}>
  {#if $isShowToast}
    <div
      class="fixed z-[100] top-3 left-1/2 text-sm -translate-x-1/2 bg-white rounded-lg px-4 py-2 flex items-center gap-2 shadow shadow-black/20 dark:bg-[#23272f] dark:text-white duration-300 dark:shadow-white/5"
      in:fly={{ y: "-50%", duration: 300 }}
      out:fly={{ y: "-100%", duration: 300 }}
    >
      <Icon icon="lets-icons:check-fill" class="text-[#10b981] w-6 h-6" />
      Copied to clipboard
    </div>
  {/if}

  <Navbar />
  {#if $isOpenModal}
    <Modal />
  {/if}
  <div class="h-12" />
  <main
    class="antialiased min-h-[calc(100vh_-_85px)] overflow-x-hidden bg-white dark:bg-dark duration-300"
  >
    <Transition url={$page.url}>
      <slot />
    </Transition>
  </main>
  {#if $page.route?.id !== "/"}
    <Footer />
  {/if}
</div>

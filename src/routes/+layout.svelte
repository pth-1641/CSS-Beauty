<script>
  import { page } from "$app/stores";
  import Transition from "../components/Transition.svelte";
  import Navbar from "../components/Navbar.svelte";
  import Modal from "../components/Modal.svelte";
  import "../styles/globals.css";
  import "../styles/prism-synthwave84.css";
  import { isOpenModal } from "../stores";
  import Footer from "../components/Footer.svelte";
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
</svelte:head>

<div class="app">
  <Navbar />
  {#if $isOpenModal}
    <Modal />
  {/if}
  <div class="h-12" />
  <main
    class={`antialiased ${$page.route?.id !== "/" ? "min-h-[calc(100vh_-_48px)]" : ""}`}
  >
    <Transition url={$page.url}>
      <slot />
    </Transition>
  </main>
  {#if $page.route?.id !== "/"}
    <Footer />
  {/if}
</div>

<script>
  import { page } from '$app/stores';
  import Transition from '../components/Transition.svelte';
  import Navbar from '../components/Navbar.svelte';
  import Modal from '../components/Modal.svelte';
  import '../styles/globals.css';
  import '../styles/prism-synthwave84.css';
  import { isOpenModal } from '../stores';
  import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
  <title>CSS Beauty</title>
  <meta name="description" content="CSS Beauty" />
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
  <main class={`antialiased ${$page.route?.id !== '/' ? 'min-h-screen' : ''}`}>
    <Transition url={$page.url}>
      <slot />
    </Transition>
  </main>
  {#if $page.route?.id !== '/'}
    <Footer />
  {/if}
</div>

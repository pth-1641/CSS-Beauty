<script>
  import { scale, fade, fly } from 'svelte/transition';
  import { isOpenModal, codeInspect } from '../stores';
  import Prism from 'prismjs';
  import { onDestroy } from 'svelte';

  let code;
  let copied;
  let interval;

  const handleCloseModal = (e) => {
    if (e.target !== e.currentTarget) return;
    isOpenModal.update((s) => (s = false));
  };

  codeInspect.subscribe((c) => (code = c));

  const handleCopyCode = (codeName) => {
    navigator.clipboard.writeText(codeName);
    copied = true;
    interval = setTimeout(() => {
      copied = false;
    }, 2000);
  };

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[99] flex items-center justify-center"
  on:click={handleCloseModal}
  transition:fade
>
  {#if copied}
    <div
      class="absolute z-20 top-3 left-1/2 -translate-x-1/2 bg-white rounded-lg px-4 py-1.5 flex items-center gap-2"
      transition:fly
    >
      Copied
      <div class="scale-90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#10b981"
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"
          />
        </svg>
      </div>
    </div>
  {/if}
  <div
    class="absolute inset-x-4 sm:static flex p-4 rounded-lg sm:w-full sm:max-w-md text-white bg-[rgba(0,0,0,0.8)]"
    transition:scale
  >
    <div class="w-full">
      <div class="flex justify-between items-center w-full">
        <h3
          class="bg-gradient-to-br from-sky-500 to-fuchsia-500 px-2 py-0.5 rounded text-sm"
        >
          HTML
        </h3>
        <button on:click={() => handleCopyCode(code.htmlCode)}> Copy </button>
      </div>
      <div class="mt-3 w-full max-h-28 overflow-auto bg-[#241b2f]">
        <code class="language-html block rounded py-3">
          {@html Prism.highlight(code.htmlCode, Prism.languages['html'])}
        </code>
      </div>
      <div class="flex justify-between items-center w-full mt-4 mb-3">
        <h3
          class="bg-gradient-to-br from-sky-500 to-fuchsia-500 px-2 py-0.5 rounded text-sm"
        >
          CSS
        </h3>
        <button on:click={() => handleCopyCode(code.cssCode)}> Copy </button>
      </div>
      <div class="w-full h-96 overflow-auto bg-[#241b2f]">
        <code class="language-css block rounded">
          {@html Prism.highlight(code.cssCode, Prism.languages['css'])}
        </code>
      </div>
    </div>
  </div>
</div>

<style>
  /* Thickness */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.2);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  /* Bottom right square */
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }
</style>

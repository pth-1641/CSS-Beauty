<script>
  import { scale } from 'svelte/transition';
  import { isOpenModal, codeInspect } from '../stores';
  import Prism from 'prismjs';

  let code;

  const handleCloseModal = (e) => {
    if (e.target !== e.currentTarget) return;
    isOpenModal.update((s) => (s = false));
  };

  codeInspect.subscribe((c) => (code = c));
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-[99] flex items-center justify-center"
  on:click={handleCloseModal}
>
  <div
    class="flex p-4 rounded-lg min-w-max text-white bg-[rgba(0,0,0,0.8)]"
    transition:scale
  >
    <div class="w-full">
      <div class="flex justify-between items-center w-full">
        <h3
          class="bg-gradient-to-br from-sky-500 to-fuchsia-500 px-2 py-0.5 rounded text-sm"
        >
          HTML
        </h3>
        <button on:click={() => navigator.clipboard.writeText(code.htmlCode)}>
          Copy
        </button>
      </div>
      <div class="mt-3 w-full max-h-28 overflow-x-hidden overflow-y-auto">
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
        <button on:click={() => navigator.clipboard.writeText(code.cssCode)}>
          Copy
        </button>
      </div>
      <div class="w-full max-h-96 overflow-x-hidden overflow-y-auto">
        <code class="language-css block rounded">
          {@html Prism.highlight(code.cssCode, Prism.languages['css'])}
        </code>
      </div>
    </div>
  </div>
</div>

<style>
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
</style>

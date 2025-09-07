<script>
  import Icon from "@iconify/svelte";
  import Prism from "prismjs";
  import { fade, scale } from "svelte/transition";
  import { codeInspect, isOpenModal, isShowToast } from "../stores";

  let code;

  const handleCloseModal = (e) => {
    if (e.target !== e.currentTarget) return;
    isOpenModal.set(false);
  };

  codeInspect.subscribe((c) => (code = c));

  const handleCopyCode = (codeName) => {
    navigator.clipboard.writeText(codeName);
    isShowToast.set(true);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="fixed inset-0 bg-black/50 z-[99] flex items-center justify-center"
  on:click={handleCloseModal}
  transition:fade
>
  <div
    class="absolute inset-x-8 sm:static flex p-4 md:p-6 rounded-lg sm:w-full sm:max-w-md text-white bg-white dark:bg-dark"
    transition:scale
  >
    <div class="w-full">
      <div class="flex justify-between items-center w-full">
        <h3
          class="border border-primary px-2 py-0.5 text-primary rounded text-sm"
        >
          HTML
        </h3>
        <button on:click={() => handleCopyCode(code.htmlCode)}>
          <Icon
            icon="lets-icons:copy-light"
            class="text-black h-6 w-6 dark:text-white"
          />
        </button>
      </div>
      <div class="mt-3 w-full">
        <code
          class="language-html max-h-28 overflow-auto block rounded py-3 border !border-black/10 dark:!border-white/10"
        >
          {@html Prism.highlight(code.htmlCode, Prism.languages["html"])}
        </code>
      </div>
      <div class="flex justify-between items-center w-full mt-4 mb-3">
        <h3
          class="border border-primary text-primary px-2 py-0.5 rounded text-sm"
        >
          CSS
        </h3>
        <button on:click={() => handleCopyCode(code.cssCode)}>
          <Icon
            icon="lets-icons:copy-light"
            class="text-black h-6 w-6 dark:text-white"
          />
        </button>
      </div>
      <div class="w-full">
        <code
          class="language-css max-h-96 block rounded overflow-auto py-3 border !border-black/10 dark:!border-white/10"
        >
          {@html Prism.highlight(code.cssCode, Prism.languages["css"])}
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
    background: rgba(0, 0, 0, 0.3);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.5);
  }

  /* Bottom right square */
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  :global(.dark) ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
  }

  :global(.dark) ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
</style>

<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    display: block;
    position: relative;
    width: 50%;
    display: grid;
    place-items: center;
  }

  .loader::before,
  .loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    height: 24px;
    width: 4px;
    background-color: var(--mainColor);
    animation: loader 0.8s cubic-bezier(0, 0, 0.03, 0.9) infinite;
  }

  .loader::before {
    left: calc(50% - 8px);
    top: calc(50% - 24px);
  }

  .loader::after {
    left: calc(50% + 8px);
    top: calc(50% - 8px);
    animation-delay: 0.2s;
  }

  @keyframes loader {
    0%,
    88%,
    100% {
      opacity: 0;
    }

    0% {
      transform: translateY(-6vmin);
    }

    33% {
      opacity: 1;
    }

    33%,
    88% {
      transform: translateY(3vmin);
    }
  }
</style>

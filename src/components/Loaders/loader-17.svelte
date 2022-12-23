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
    width: 12px;
    height: 12px;
    background-color: var(--mainColor);
    border-radius: 50%;
    animation: loader 1.2s ease-in-out infinite;
  }

  .loader::before {
    left: calc(50% - 24px);
  }

  .loader::after {
    left: calc(50% + 12px);
    animation-delay: -0.4s;
  }

  @keyframes loader {
    0%,
    100% {
      transform: translateY(-2.6vmin);
    }

    44% {
      transform: translateY(2.6vmin);
    }
  }
</style>

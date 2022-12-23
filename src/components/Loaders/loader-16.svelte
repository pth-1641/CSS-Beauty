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
    opacity: 0;
    animation: loader 0.8s cubic-bezier(0.2, 0.32, 0, 0.87) infinite;
  }

  .loader::after {
    animation-delay: 0.3s;
  }

  @keyframes loader {
    0%,
    80%,
    100% {
      opacity: 0;
    }

    33% {
      opacity: 1;
    }

    0%,
    100% {
      transform: translateX(-12px);
    }

    90% {
      transform: translateX(12px);
    }
  }
</style>

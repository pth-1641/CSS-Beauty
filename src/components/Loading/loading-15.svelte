<script>
  export let mainColor;
</script>

<div class="loading" style="--mainColor:{mainColor}" />

<style>
  .loading {
    display: block;
    position: relative;
    width: 50%;
    display: grid;
    place-items: center;
  }

  .loading::before,
  .loading::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: var(--mainColor);
    border-radius: 50%;
    animation: loading 1.2s ease-in-out infinite;
  }

  .loading::before {
    left: calc(50% - 24px);
  }

  .loading::after {
    left: calc(50% + 12px);
    animation-delay: -0.4s;
  }

  @keyframes loading {
    0%,
    100% {
      transform: translateY(-2.6vmin);
    }

    44% {
      transform: translateY(2.6vmin);
    }
  }
</style>

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
    opacity: 0;
    animation: loading 0.8s cubic-bezier(0.2, 0.32, 0, 0.87) infinite;
  }

  .loading::after {
    animation-delay: 0.3s;
  }

  @keyframes loading {
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

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
    border-radius: 50%;
    background-color: var(--mainColor);
    animation: loading 0.8s cubic-bezier(0.39, 0.31, 0, 1.11) infinite;
  }

  .loading::before {
    left: calc(50% - 18px);
  }

  .loading::after {
    left: calc(50% + 18px);
    animation-delay: 0.12s;
  }

  @keyframes loading {
    0%,
    100% {
      opacity: 0;
    }

    0% {
      transform: translate(-4vmin, -4vmin);
    }

    66% {
      opacity: 1;
    }

    66%,
    100% {
      transform: none;
    }
  }
</style>

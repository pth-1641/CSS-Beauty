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
  }

  .loading::before {
    width: 20px;
    height: 20px;
    background-color: var(--mainColor);
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    animation: loading 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  @keyframes loading {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(100%);
    }

    50% {
      transform: translateX(100%) translateY(100%);
    }

    75% {
      transform: translateY(100%);
    }
  }
</style>

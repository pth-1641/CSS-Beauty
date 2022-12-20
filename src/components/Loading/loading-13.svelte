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
    width: 56px;
    height: 56px;
    border: 4px solid var(--mainColor);
    border-top-color: transparent;
    border-radius: 50%;
    animation: loading 1s linear infinite;
  }

  .loading::after {
    width: calc(56px - 2px);
    height: calc(56px - 2px);
    border: 2px solid transparent;
    border-top-color: var(--mainColor);
    border-radius: 50%;
    animation: loading 0.8s linear reverse infinite;
  }

  @keyframes loading {
    100% {
      transform: rotate(1turn);
    }
  }
</style>

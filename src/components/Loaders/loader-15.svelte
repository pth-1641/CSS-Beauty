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
  }

  .loader::before {
    width: 56px;
    height: 56px;
    border: 4px solid var(--mainColor);
    border-top-color: transparent;
    border-radius: 50%;
    animation: loader 1s linear infinite;
  }

  .loader::after {
    width: calc(56px - 2px);
    height: calc(56px - 2px);
    border: 2px solid transparent;
    border-top-color: var(--mainColor);
    border-radius: 50%;
    animation: loader 0.8s linear reverse infinite;
  }

  @keyframes loader {
    100% {
      transform: rotate(1turn);
    }
  }
</style>

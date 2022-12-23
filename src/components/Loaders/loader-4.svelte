<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    position: relative;
    width: 2em;
    height: 2em;
    border: 3px solid var(--mainColor);
    overflow: hidden;
    animation: spin 3s ease infinite;
  }

  .loader::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 2em;
    height: 2em;
    background-color: var(--mainColor);
    transform-origin: center bottom;
    transform: scaleY(1);
    animation: fill 3s linear infinite;
  }

  @keyframes spin {
    50%,
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fill {
    25%,
    50% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }
</style>

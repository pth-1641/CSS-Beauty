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
    height: 4px;
    width: 48px;
    background-color: var(--mainColor);
    animation: loader 0.8s cubic-bezier(0, 0, 0.03, 0.9) infinite;
  }

  @keyframes loader {
    0%,
    44%,
    88.1%,
    100% {
      transform-origin: left;
    }

    0%,
    100%,
    88% {
      transform: scaleX(0);
    }

    44.1%,
    88% {
      transform-origin: right;
    }

    33%,
    44% {
      transform: scaleX(1);
    }
  }
</style>

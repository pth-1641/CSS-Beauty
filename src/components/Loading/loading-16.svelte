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
    height: 4px;
    width: 48px;
    background-color: var(--mainColor);
    animation: loading 0.8s cubic-bezier(0, 0, 0.03, 0.9) infinite;
  }

  @keyframes loading {
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

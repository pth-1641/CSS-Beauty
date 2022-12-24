<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    width: max-content;
    height: 16px;
    margin: auto;
  }

  .loader > span {
    width: 2px;
    height: 16px;
    background: var(--mainColor);
    margin: 0 1px;
    display: inline-block;
    animation: loader 1s infinite ease-in-out;
  }

  .loader > span:nth-child(1) {
    animation-delay: 0.8s;
  }

  .loader > span:nth-child(2) {
    animation-delay: 0.6s;
  }

  .loader > span:nth-child(3) {
    animation-delay: 0.4s;
  }

  .loader > span:nth-child(4) {
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(6) {
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(7) {
    animation-delay: 0.4s;
  }

  .loader > span:nth-child(8) {
    animation-delay: 0.6s;
  }

  .loader > span:nth-child(9) {
    animation-delay: 0.8s;
  }

  @keyframes loader {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

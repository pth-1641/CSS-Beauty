<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    width: 56px;
    height: 56px;
    position: relative;
  }

  .loader > span {
    position: absolute;
    top: 50%;
    width: 60px;
    height: 4px;
    background: var(--mainColor);
    animation: loader 1.6s infinite ease;
  }

  .loader > span:nth-of-type(2) {
    animation-delay: 0.1s;
  }

  .loader > span:nth-of-type(3) {
    animation-delay: 0.2s;
  }

  .loader > span:nth-of-type(4) {
    animation-delay: 0.3s;
  }

  @keyframes loader {
    100% {
      transform: rotate(360deg);
    }
  }
</style>

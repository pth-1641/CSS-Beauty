<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    position: relative;
    height: 50px;
    width: 50px;
  }

  .loader > span {
    display: block;
    bottom: 20px;
    width: 9px;
    height: 15px;
    background: var(--mainColor);
    position: absolute;
    animation: bars4 2s infinite ease-in-out;
  }

  .loader > span:nth-child(2) {
    left: 11px;
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(3) {
    left: 22px;
    animation-delay: 0.3s;
  }

  .loader > span:nth-child(4) {
    left: 33px;
    animation-delay: 0.4s;
  }

  .loader > span:nth-child(5) {
    left: 44px;
    animation-delay: 0.5s;
  }

  @keyframes bars4 {
    0% {
      transform: translateX(0px);
      transform: translateX(0px);
      opacity: 0.25;
    }
    25% {
      transform: translateX(0px);
      transform: translateX(0px);
      opacity: 1;
    }
    50% {
      transform: translateX(15px);
      transform: translateX(15px);
      opacity: 0.25;
    }
    100% {
      transform: translateX(0px);
      transform: translateX(0px);
      opacity: 0.25;
    }
  }
</style>

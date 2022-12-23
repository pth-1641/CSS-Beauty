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
    position: absolute;
    bottom: 20px;
    width: 9px;
    height: 5px;
    opacity: 0.25;
    animation: bars1 1.5s infinite ease-in-out;
    background-color: var(--mainColor);
  }

  .loader > span:nth-child(2) {
    left: 11px;
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(3) {
    left: 22px;
    animation-delay: 0.4s;
  }

  .loader > span:nth-child(4) {
    left: 33px;
    animation-delay: 0.6s;
  }

  .loader > span:nth-child(5) {
    left: 44px;
    animation-delay: 0.8s;
  }

  @keyframes bars1 {
    0% {
      height: 5px;
      transform: translateY(0px);
      transform: translateY(0px);
      opacity: 0.25;
    }
    25% {
      height: 30px;
      transform: translateY(15px);
      transform: translateY(15px);
      opacity: 1;
    }
    50% {
      height: 5px;
      transform: translateY(0px);
      transform: translateY(0px);
      opacity: 0.25;
    }
    100% {
      height: 5px;
      transform: translateY(0px);
      transform: translateY(0px);
      opacity: 0.25;
    }
  }
</style>

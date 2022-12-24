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
</div>

<style>
  .loader {
    width: 0px;
    height: 0px;
    position: relative;
  }

  .loader > span {
    width: 6px;
    height: 20px;
    position: absolute;
    left: -10px;
    bottom: 15px;
    border-radius: 5px;
    transform-origin: 10px 35px;
    transform: rotate(0deg);
    animation: loader 0.8s infinite;
  }
  .loader > span:nth-child(2) {
    transform: rotate(45deg);
    animation-delay: 0.1s;
  }
  .loader > span:nth-child(3) {
    transform: rotate(90deg);
    animation-delay: 0.2s;
  }
  .loader > span:nth-child(4) {
    transform: rotate(135deg);
    animation-delay: 0.3s;
  }
  .loader > span:nth-child(5) {
    transform: rotate(180deg);
    animation-delay: 0.4s;
  }
  .loader > span:nth-child(6) {
    transform: rotate(225deg);
    animation-delay: 0.5s;
  }
  .loader > span:nth-child(7) {
    transform: rotate(270deg);
    animation-delay: 0.6s;
  }
  .loader > span:nth-child(8) {
    transform: rotate(315deg);
    animation-delay: 0.7s;
  }

  @keyframes loader {
    0% {
      background: transparent;
      left: -10px;
      transform-origin: 10px 35px;
    }
    30% {
      background: var(--mainColor);
    }
    100% {
      background: transparent;
      left: 10px;
      transform-origin: -10px 35px;
    }
  }
</style>

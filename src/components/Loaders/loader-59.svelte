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
    position: relative;
    border-radius: 50%;
    animation: rotation 16s infinite linear;
  }

  .loader > span {
    display: block;
  }

  .loader > span:after {
    content: '';
    width: 16px;
    height: 16px;
    border: 2px solid var(--mainColor);
    position: absolute;
    left: 16px;
    top: 16px;
    animation: shuffle 2s infinite;
  }

  .loader > span:nth-child(1) {
    transform: rotate(0deg);
  }

  .loader > span:nth-child(1):after {
    animation-delay: -0.5s;
  }

  .loader > span:nth-child(2) {
    transform: rotate(45deg);
  }

  .loader > span:nth-child(2):after {
    animation-delay: -1s;
  }

  .loader > span:nth-child(3) {
    transform: rotate(90deg);
  }

  .loader > span:nth-child(3):after {
    animation-delay: -1.5s;
  }

  .loader > span:nth-child(4) {
    transform: rotate(135deg);
  }

  .loader > span:nth-child(4):after {
    animation-delay: -2s;
  }

  .loader > span:nth-child(5) {
    transform: rotate(180deg);
  }

  .loader > span:nth-child(5):after {
    animation-delay: -2.5s;
  }

  .loader > span:nth-child(6) {
    transform: rotate(225deg);
  }

  .loader > span:nth-child(6):after {
    animation-delay: -3s;
  }

  .loader > span:nth-child(7) {
    transform: rotate(270deg);
  }

  .loader > span:nth-child(7):after {
    animation-delay: -3.5s;
  }

  .loader > span:nth-child(8) {
    transform: rotate(315deg);
  }

  .loader > span:nth-child(8):after {
    animation-delay: -4;
  }

  @keyframes rotation {
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @keyframes shuffle {
    50% {
      transform: scale(0.4, 0.4) rotate(-90deg);
      border-radius: 50%;
    }
  }
</style>

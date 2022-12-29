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
    margin: 20px auto;
    width: 48px;
    height: 48px;
    position: relative;
    transform: rotateZ(45deg);
  }

  .loader > span {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
  }

  .loader > span:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--mainColor);
    animation: loader 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }

  .loader > span:nth-child(2) {
    transform: scale(1.1) rotateZ(90deg);
  }

  .loader > span:nth-child(3) {
    transform: scale(1.1) rotateZ(270deg);
  }

  .loader > span:nth-child(4) {
    transform: scale(1.1) rotateZ(180deg);
  }

  .loader > span:nth-child(2)::before {
    animation-delay: 0.3s;
  }

  .loader > span:nth-child(3):before {
    animation-delay: 0.9s;
  }

  .loader > span:nth-child(4):before {
    animation-delay: 0.6s;
  }

  @keyframes loader {
    0%,
    10% {
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    }
    25%,
    75% {
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    }
    90%,
    100% {
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }
</style>

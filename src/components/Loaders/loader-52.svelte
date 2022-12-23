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
    width: 56px;
    overflow: hidden;
  }

  .loader > span {
    display: inline-block;
    background: var(--mainColor);
    height: 6px;
    width: 6px;
    opacity: 0;
    border-radius: 50%;
    animation: loader 2.8s infinite;
    transform: translateX(-300px);
  }

  .loader > span:nth-child(1) {
    animation-delay: 0.5s;
  }

  .loader > span:nth-child(2) {
    animation-delay: 0.4s;
  }

  .loader > span:nth-child(3) {
    animation-delay: 0.3s;
  }

  .loader > span:nth-child(4) {
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(5) {
    animation-delay: 0.1s;
  }

  @keyframes loader {
    40% {
      transform: translateX(0px);
      opacity: 0.8;
    }
    100% {
      transform: translateX(300px);
      opacity: 0;
    }
  }
</style>

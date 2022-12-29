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
    width: 56px;
    height: 56px;
  }

  .loader > span {
    width: calc(100% / 3);
    height: calc(100% / 3);
    background-color: var(--mainColor);
    float: left;
    animation: loader 1.3s infinite ease-in-out;
  }

  .loader > span:nth-child(1) {
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(2) {
    animation-delay: 0.3s;
  }

  .loader > span:nth-child(3) {
    animation-delay: 0.4s;
  }

  .loader > span:nth-child(4) {
    animation-delay: 0.1s;
  }

  .loader > span:nth-child(5) {
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(6) {
    animation-delay: 0.3s;
  }

  .loader > span:nth-child(7) {
    animation-delay: 0s;
  }

  .loader > span:nth-child(8) {
    animation-delay: 0.1s;
  }

  .loader > span:nth-child(9) {
    animation-delay: 0.2s;
  }

  @keyframes loader {
    0%,
    70%,
    100% {
      transform: scale3D(1, 1, 1);
    }
    35% {
      transform: scale3D(0, 0, 1);
    }
  }
</style>

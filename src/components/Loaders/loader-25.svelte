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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    height: 50px;
    width: 50px;
  }

  .loader > span {
    width: 16px;
    height: 16px;
    align-self: center;
    justify-self: center;
    background-color: var(--mainColor);
    display: inline-block;
    animation: loader 1.7s infinite ease-in-out both;
  }

  .loader > span:nth-child(1) {
    left: 0px;
    animation-delay: 0.2s;
  }

  .loader > span:nth-child(2) {
    left: 15px;
    animation-delay: 0.3s;
  }

  .loader > span:nth-child(3) {
    left: 30px;
    animation-delay: 0.4s;
  }

  .loader > span:nth-child(4) {
    left: 45px;
    animation-delay: 0.5s;
  }

  @keyframes loader {
    0%,
    80%,
    100% {
      transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }
    40% {
      transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
</style>

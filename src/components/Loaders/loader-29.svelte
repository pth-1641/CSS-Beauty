<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    display: block;
    position: relative;
    height: 50px;
    width: 50px;
  }

  .loader > span {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 0;
    height: 0;
  }

  .loader > span:nth-child(1) {
    border-top: 30px solid var(--mainColor);
    border-left: 30px solid transparent;
    animation: slice1 2s infinite ease-out;
  }

  .loader > span:nth-child(2) {
    border-bottom: 30px solid var(--mainColor);
    border-right: 30px solid transparent;
    animation: slice2 2s infinite ease-out;
  }

  @keyframes slice1 {
    0%,
    75%,
    100% {
      transform: translateX(0px);
      transform: translateX(0px);
    }
    25% {
      transform: translateX(10px);
      transform: translateX(10px);
    }
    50% {
      transform: translateY(-12px);
      transform: translateY(-12px);
    }
  }

  @keyframes slice2 {
    0%,
    100% {
      transform: translateX(0px);
      transform: translateX(0px);
    }
    25% {
      transform: translateX(-10px);
      transform: translateX(-10px);
    }
    50% {
      transform: translateY(12px);
      transform: translateY(12px);
    }
  }
</style>

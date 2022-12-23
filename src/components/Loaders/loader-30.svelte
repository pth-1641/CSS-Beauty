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
    display: block;
    position: relative;
    height: 50px;
    width: 50px;
  }

  .loader > span {
    position: absolute;
    top: 10px;
    width: 10px;
    height: 10px;
    background: var(--mainColor);
    border-radius: 50%;
    animation: dots1 1s infinite ease-in-out;
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

  @keyframes dots1 {
    0% {
      transform: translateY(0px);
      transform: translateY(0px);
      background: var(--mainColor);
    }
    50% {
      transform: translateY(10px);
      transform: translateY(10px);
      background: var(--mainColor);
    }
    100% {
      transform: translateY(0px);
      transform: translateY(0px);
      background: var(--mainColor);
    }
  }
</style>

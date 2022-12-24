<script>
  export let mainColor;
</script>

<div class="loader">
  <div class="circle" style="--mainColor:{mainColor}" />
  <div class="circle" style="--mainColor:{mainColor}" />
  <div class="circle" style="--mainColor:{mainColor}" />
  <div class="shadow" />
  <div class="shadow" />
  <div class="shadow" />
</div>

<style>
  .loader {
    width: 56px;
    height: 56px;
    position: relative;
  }

  .circle {
    width: 14px;
    height: 14px;
    position: absolute;
    border-radius: 50%;
    background-color: var(--mainColor);
    left: 0;
    animation: circle 0.5s alternate infinite ease;
  }

  .circle:nth-child(2) {
    left: 35%;
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    left: auto;
    right: 0;
    animation-delay: 0.3s;
  }

  .shadow {
    width: 14px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 35px;
    transform-origin: 50%;
    z-index: -1;
    left: 0;
    filter: blur(1px);
    animation: shadow 0.5s alternate infinite ease;
  }

  .shadow:nth-child(4) {
    left: 35%;
    animation-delay: 0.2s;
  }
  .shadow:nth-child(5) {
    left: auto;
    right: 0;
    animation-delay: 0.3s;
  }

  @keyframes circle {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  }

  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }
</style>

<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}">
  <div class="box" style="--mainColor:{mainColor}" />
  <div class="hill" style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    position: relative;
    width: 56px;
    height: 56px;
    background-color: 0.404456;
  }

  .hill {
    position: absolute;
    width: 72px;
    height: 72px;
    top: 18px;
    left: 18px;
    background-color: transparent;
    border-left: 4px solid var(--mainColor);
    transform: rotate(45deg);
  }

  .box {
    position: absolute;
    left: -4px;
    bottom: -10px;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border: 2px solid var(--mainColor);
    border-radius: 15%;
    transform: translate(0, -1em) rotate(-45deg);
    animation: push 2s cubic-bezier(0.79, 0, 0.47, 0.97) infinite;
  }

  @keyframes push {
    0% {
      transform: translate(0, -1em) rotate(-45deg);
    }
    5% {
      transform: translate(0, -1em) rotate(-50deg);
    }
    20% {
      transform: translate(1em, -2em) rotate(47deg);
    }
    25% {
      transform: translate(1em, -2em) rotate(45deg);
    }
    30% {
      transform: translate(1em, -2em) rotate(40deg);
    }
    45% {
      transform: translate(2em, -3em) rotate(137deg);
    }
    50% {
      transform: translate(2em, -3em) rotate(135deg);
    }
    55% {
      transform: translate(2em, -3em) rotate(130deg);
    }
    100% {
      transform: translate(0, -1em) rotate(-225deg);
    }
  }
</style>

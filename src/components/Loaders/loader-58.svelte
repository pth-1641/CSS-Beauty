<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span />
</div>

<style>
  .loader {
    position: relative;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader > span:nth-child(1) {
    width: 42px;
    height: 42px;
    background: var(--mainColor);
    animation: animate 0.5s linear infinite;
    border-radius: 3px;
  }

  .loader > span:nth-child(2) {
    width: 42px;
    height: 5px;
    background: #000;
    opacity: 0.1;
    position: absolute;
    top: 59px;
    border-radius: 50%;
    animation: shadow 0.5s linear infinite;
  }

  @keyframes loader {
    0% {
      left: -100px;
    }
    100% {
      left: 110%;
    }
  }

  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow {
    50% {
      transform: scale(1.2, 1);
    }
  }
</style>

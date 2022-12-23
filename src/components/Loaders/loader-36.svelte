<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}">
  <span />
  <span />
  <span />
</div>

<style>
  .loader {
    color: var(--mainColor);
    height: 48px;
    width: 48px;
    position: relative;
    display: inline-block;
    animation: rotateSquareToCircle 3s ease infinite;
  }

  .loader > span {
    height: 0;
    width: 0;
    box-sizing: border-box;
    border: 5px solid;
    position: absolute;
    top: 40%;
  }

  .loader > span:nth-child(1) {
    left: 0;
    animation: moveRight 2s ease infinite;
  }

  .loader > span:nth-child(2) {
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    animation: toCircle 2s ease infinite;
  }

  .loader > span:nth-child(3) {
    right: 0;
    animation: moveLeft 2s ease infinite;
  }

  @keyframes moveLeft {
    25% {
      transform: translateX(-19px);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(-19px);
      border-radius: 50%;
    }
  }

  @keyframes moveRight {
    25% {
      transform: translateX(19px);
    }
    50% {
      transform: translateX(0);
    }
    75% {
      transform: translateX(19px);
      border-radius: 50%;
    }
  }

  @keyframes toCircle {
    50% {
      border-radius: 0%;
    }
  }

  @keyframes rotateSquareToCircle {
    50% {
      transform: rotate(-270deg);
    }
  }
</style>

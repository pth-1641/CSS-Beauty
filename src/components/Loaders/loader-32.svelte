<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    position: relative;
    height: 50px;
    width: 50px;
    animation: triangle 2s infinite linear;
  }

  .loader > span {
    left: 10px;
    top: 10px;
    position: absolute;
    height: 0;
    width: 0;
    border-top: 26px solid var(--mainColor);
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    animation: triangleSp 2s infinite linear;
  }

  @keyframes triangleSp {
    0%,
    100% {
      transform: translateY(0px);
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
      transform: translateY(-10px);
    }
  }

  @keyframes triangle {
    0%,
    100% {
      transform: rotateY(0deg);
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(360deg);
      transform: rotateY(360deg);
    }
  }
</style>

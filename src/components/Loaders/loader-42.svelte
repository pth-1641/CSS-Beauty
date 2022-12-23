<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    border-radius: 50%;
    border-top: solid 6px var(--mainColor);
    border-right: solid 6px transparent;
    border-bottom: solid 6px transparent;
    border-left: solid 6px transparent;
    animation: loader 1s linear infinite;
  }

  .loader:before {
    border-radius: 50%;
    content: ' ';
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    border-top: solid 6px transparent;
    border-right: solid 6px transparent;
    border-bottom: solid 6px transparent;
    border-left: solid 6px var(--mainColor);
    position: absolute;
    top: -6px;
    left: -6px;
    transform: rotateZ(-30deg);
  }

  .loader:after {
    border-radius: 50%;
    content: ' ';
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    border-top: solid 6px transparent;
    border-right: solid 6px var(--mainColor);
    border-bottom: solid 6px transparent;
    border-left: solid 6px transparent;
    position: absolute;
    top: -6px;
    right: -6px;
    transform: rotateZ(30deg);
  }

  @keyframes loader {
    0% {
      transform: rotate(0);
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: rotate(360deg);
      opacity: 1;
    }
  }
</style>

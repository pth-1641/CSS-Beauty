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
    animation: loader 1s linear infinite;
  }

  .loader:before {
    border-radius: 50%;
    content: ' ';
    width: 20px;
    height: 20px;
    display: inline-block;
    box-sizing: border-box;
    background-color: var(--mainColor);
    position: absolute;
    top: 0;
    left: 0;
    animation: loader-before 1s ease-in-out infinite;
  }

  .loader:after {
    border-radius: 50%;
    content: ' ';
    width: 20px;
    height: 20px;
    display: inline-block;
    box-sizing: border-box;
    background-color: var(--mainColor);
    position: absolute;
    bottom: 0;
    right: 0;
    animation: loader-after 1s ease-in-out infinite;
  }
  @keyframes loader {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loader-before {
    0% {
      transform: translate(-5px, -5px);
    }
    50% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-5px, -5px);
    }
  }

  @keyframes loader-after {
    0% {
      transform: translate(5px, 5px);
    }
    50% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(5px, 5px);
    }
  }
</style>

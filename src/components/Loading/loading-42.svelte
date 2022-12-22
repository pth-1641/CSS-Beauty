<script>
  export let mainColor;
</script>

<div class="loading" style="--mainColor:{mainColor}" />

<style>
  .loading {
    width: 48px;
    height: 48px;
    display: inline-block;
    box-sizing: border-box;
    position: relative;
    animation: loading 1s linear infinite;
  }

  .loading:before {
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
    animation: loading-before 1s ease-in-out infinite;
  }

  .loading:after {
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
    animation: loading-after 1s ease-in-out infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes loading-before {
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

  @keyframes loading-after {
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

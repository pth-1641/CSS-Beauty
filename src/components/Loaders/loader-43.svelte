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
    background: var(--mainColor);
    animation: loader 1s linear infinite;
  }

  @keyframes loader {
    0% {
      transform: rotate(0) scale(1);
      border-radius: 0;
    }
    25%,
    75% {
      transform: rotate(180deg) scale(0.4);
      border-radius: 50%;
    }
    100% {
      transform: rotate(360deg) scale(1);
      border-radius: 0;
    }
  }
</style>

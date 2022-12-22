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
    background: var(--mainColor);
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
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

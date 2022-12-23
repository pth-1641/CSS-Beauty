<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    width: 4rem;
    height: 4rem;
    overflow: hidden;
    position: relative;
    height: 0.5rem;
  }

  .loader::before {
    content: '';
    position: absolute;
    left: -130%;
    width: 100%;
    height: 100%;
    background: var(--mainColor);
    animation: progress 4s linear infinite;
  }

  @keyframes progress {
    0% {
      left: -130%;
    }
    50% {
      left: 130%;
    }
  }
</style>

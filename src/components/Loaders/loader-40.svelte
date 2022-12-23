<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    width: 4rem;
    height: 4rem;
    border-top: 3px solid var(--mainColor);
    border-right: 3px solid transparent;
    border-radius: 50%;
    animation: rotation 0.8s linear infinite;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>

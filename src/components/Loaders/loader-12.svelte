<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    border: 3px solid rgba(255, 62, 0, 0.2);
    border-top-color: var(--mainColor);
    border-radius: 50%;
    width: 3em;
    height: 3em;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>

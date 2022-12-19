<script>
  export let mainColor;
</script>

<div class="loading">
  <div style="--mainColor:{mainColor}" />
</div>

<style>
  .loading {
    perspective: 120px;
  }

  .loading > div {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    border: 4px solid var(--mainColor);
    animation: spin 1.5s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      transform: rotateY(540deg);
    }
  }
</style>

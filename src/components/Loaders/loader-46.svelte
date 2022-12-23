<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    width: 56px;
    height: 56px;
    border: 8px dotted var(--mainColor);
    border-radius: 50%;
    animation: 0.8s loader linear infinite;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

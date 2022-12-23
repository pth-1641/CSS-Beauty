<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    width: 56px;
    height: 56px;
    border: 2px solid var(--mainColor);
    border-radius: 50%;
    animation: 1s loader linear infinite;
    position: relative;
  }

  .loader::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -6px;
    left: 50%;
    border: 6px solid var(--mainColor);
    border-radius: 50%;
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

<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    height: 50px;
    width: 50px;
    border: 6px solid rgba(255, 62, 0, 0.4);
    border-radius: 50%;
    position: relative;
    animation: loader 2s infinite linear;
  }

  .loader:before {
    content: '';
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: var(--mainColor);
    position: absolute;
    top: -7px;
    left: 14px;
  }

  @keyframes loader {
    100% {
      transform: rotate(360deg);
    }
  }
</style>

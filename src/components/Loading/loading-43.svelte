<script>
  export let mainColor;
</script>

<div class="loading" style="--mainColor:{mainColor}" />

<style>
  .loading {
    height: 50px;
    width: 50px;
    border: 6px solid rgba(255, 62, 0, 0.4);
    border-radius: 50%;
    position: relative;
    animation: loading 2s infinite linear;
  }

  .loading:before {
    content: '';
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: var(--mainColor);
    position: absolute;
    top: -7px;
    left: 14px;
  }

  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }
</style>

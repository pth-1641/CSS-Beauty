<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    position: relative;
    box-sizing: border-box;
    border: 3px solid var(--mainColor);
    width: 56px;
    height: 56px;
    animation: spin 3.2s infinite linear;
  }

  .loader::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border: 3px solid var(--mainColor);
    width: 28px;
    height: 28px;
    animation: pulse 1.6s infinite ease;
  }

  @keyframes pulse {
    50% {
      border-width: 20px;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>

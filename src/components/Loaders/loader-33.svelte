<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    position: relative;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px var(--mainColor) solid;
  }

  .loader:before {
    content: '';
    border-left: 1px var(--mainColor) solid;
    position: absolute;
    top: 9%;
    left: 50%;
    width: 2px;
    height: calc(50% - 2px);
    transform: rotate(0deg);
    transform: rotate(0deg);
    transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    animation: spClock 1s infinite linear;
  }

  @keyframes spClock {
    from {
      transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
</style>

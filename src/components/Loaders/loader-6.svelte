<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    width: 4em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .loader span {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: var(--mainColor);
  }

  .loader span:nth-of-type(1) {
    transform: translateX(-100%);
    animation: left-swing 0.5s ease-in alternate infinite;
  }

  .loader span:nth-of-type(3) {
    transform: translateX(-95%);
    animation: right-swing 0.5s ease-out alternate infinite;
  }

  @keyframes left-swing {
    50%,
    100% {
      transform: translateX(95%);
    }
  }

  @keyframes right-swing {
    50% {
      transform: translateX(-95%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>

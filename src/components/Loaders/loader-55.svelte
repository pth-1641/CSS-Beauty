<script>
  export let mainColor;
</script>

<div class="loader">
  <span style="--mainColor:{mainColor}" />
  <span style="--mainColor:{mainColor}" />
</div>

<style>
  .loader {
    position: relative;
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  .loader > span:nth-child(1) {
    width: 80%;
    height: 80%;
    padding: 3px;
    position: absolute;
    display: flex;
    justify-content: center;
    border: 2px solid var(--mainColor);
    background: transparent;
    align-items: center;
    animation: loader-1 3s ease-in-out 0s infinite alternate;
  }

  .loader > span:nth-child(2) {
    width: 80%;
    height: 80%;
    padding: 3px;
    left: -80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--mainColor);
    background: transparent;
    transform: rotate(45deg);
    animation: loader-2 3s ease-in-out 0s infinite alternate;
  }

  @keyframes loader-1 {
    0% {
      transform: rotate(45deg);
    }
    25% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(-135deg);
    }
    75% {
      transform: rotate(-225deg);
    }
    100% {
      transform: rotate(-315deg);
    }
  }

  @keyframes loader-2 {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

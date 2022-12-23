<script>
  export let mainColor;
</script>

<div class="loader" style="--mainColor:{mainColor}" />

<style>
  .loader {
    display: block;
    position: relative;
    width: 50%;
    display: grid;
    place-items: center;
  }

  .loader::before,
  .loader::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--mainColor);
  }

  .loader::before {
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    animation: loader-1 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  .loader::after {
    top: 50%;
    left: 50%;
    animation: loader-2 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
  }

  @keyframes loader-1 {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(100%);
    }

    50% {
      transform: translateX(100%) translateY(100%);
    }

    75% {
      transform: translateY(100%);
    }
  }

  @keyframes loader-2 {
    0%,
    100% {
      transform: none;
    }

    25% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(-100%) translateY(-100%);
    }

    75% {
      transform: translateY(-100%);
    }
  }
</style>
